const UserService = require('../services/userService');

class UserController {
    static async register(req, res, next) {
        try {
            const user = await UserService.register(req.body);
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }

    static async login(req, res, next) {
        try {
            const token = await UserService.login(req.body);
            res.status(200).json({ token });
        } catch (error) {
            next(error);
        }
    }

    static async getAllUsers(req, res, next) {
        try {
            const users = await UserService.findAll();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }

    static async getUser(req, res, next) {
        try {
            const user = await UserService.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;