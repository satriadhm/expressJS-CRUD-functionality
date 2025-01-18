const express = require('express');
const TransactionController = require('../controllers/transactionController');
const authenticate = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authenticate, TransactionController.createTransaction);
router.get('/', TransactionController.getAllTransactions);
router.get('/:id', TransactionController.getTransaction);

module.exports = router;