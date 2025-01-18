const TransactionService = require('../services/transactionService');

class TransactionController {
    static async createTransaction(req, res, next) {
        try {
            const transaction = await TransactionService.create(req.body);
            res.status(201).json(transaction);
        } catch (error) {
            next(error);
        }
    }

    static async getAllTransactions(req, res, next) {
        try {
            const transactions = await TransactionService.findAll();
            res.status(200).json(transactions);
        } catch (error) {
            next(error);
        }
    }

    static async getTransaction(req, res, next) {
        try {
            const transaction = await TransactionService.findById(req.params.id);
            if (!transaction) {
                return res.status(404).json({ message: 'Transaction not found' });
            }
            res.status(200).json(transaction);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = TransactionController;