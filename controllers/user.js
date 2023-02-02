const { getDb } = require("../config/mongodbConfig");
const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const User = require("../models/user");

class UserController {
  static async items(req, res, next) {
    getDb()
      .collection("movies")
      .find()
      .toArray()
      .then((data) => console.log(data));
    res.status(200).json("ok");
  }

  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;

      if (!username) throw { name: "Username is required" };
      if (!email) throw { name: "Email is required" };
      if (!password) throw { name: "Password is required" };
      if (!phoneNumber) throw { name: "Phone number is required" };
      if (!address) throw { name: "Address is required" };

      const user = await User.create({
        username,
        email,
        password: hashPassword(password),
        role: "admin",
        phoneNumber,
        address,
      });

      res.status(201).json({
        _id: user.insertedId,
        username,
      });
    } catch (err) {
      next(err);
    }
  }

  static async users(req, res, next) {
    try {
      await User.findAll().then((users) => {
        res.status(200).json(users);
      });
    } catch (err) {
      next(err);
    }
  }

  static async user(req, res, next) {
    try {
      const id = req.params.id;
      const user = await User.findById(id);
      if (!user) throw { name: "User not found" };

      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) throw { name: "User not found" };
      await User.destroy(req.params.id);

      res
        .status(200)
        .json({ message: `User ${user.username} successfully deleted` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
