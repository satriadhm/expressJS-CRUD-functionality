const { getDb } = require("../config/mongodbConfig");
const Transaction = require("../models/transaction");
const User = require("../models/user");
const Product = require("../models/product");

class TransactionController {
    static async items(req, res, next) {
        getDb()
            .collection("transactions")
            .find()
            .toArray()
            .then((data) => console.log(data));
        res.status(200).json("ok");
    }
    static async addTransaction(req, res, next) {
        try {
            const { userId, productId, quantity, status } = req.body;

            if (!userId) throw { name: "UserId is required" };
            if (!productId) throw { name: "ProductId is required" };
            if (!quantity) throw { name: "Quantity is required" };
            if (!status) throw { name: "Status is required" };

            if (User.findById(userId) === null) throw { name: "User not found" };
            if (Product.findById(productId) === null) throw { name: "Product not found" };

            const transaction = await Transaction.create({
                userId,
                productId,
                quantity,
                status,
            });

            res.status(201).json({
                _id: transaction.insertedId,
                userId,
            });
        } catch (err) {
            next(err);
        }
    }
    static async getAllTransactions(req, res, next) {
        try {
            await Transaction.findAll().then((transactions) => {
                res.status(200).json(transactions);
            });
        } catch (err) {
            next(err);
        }
    }
    static async getTransaction(req, res, next) {
        try {
            const id = req.params.id;
            const transaction = await Transaction.findById(id);
            if (!transaction) throw { name: "Transaction not found" };

            res.status(200).json(transaction);
        } catch (err) {
            next(err);
        }
    }
    static async deleteTransaction (req,res,next) {
        try {
            const id = req.params.id;
            const transaction = await Transaction.destroy(id);
            if (!transaction) throw { name: "Transaction not found" };
            res.status(200).json(transaction);
        } catch (err) {
            next(err);
        }
    }
}
module.exports = TransactionController;