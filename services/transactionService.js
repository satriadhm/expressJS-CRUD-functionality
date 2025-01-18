const Transaction = require('../models/transactionModel');

class TransactionService {
    static async create(data) {
        return Transaction.create(data);
    }

    static async findAll() {
        return Transaction.find();
    }

    static async findById(id) {
        return Transaction.findById(id);
    }
}

module.exports = TransactionService;