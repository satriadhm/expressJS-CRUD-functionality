const express = require('express');
const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');
const transactionRoutes = require('./transactionRoutes');
const router = express.Router();

router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/transactions', transactionRoutes);

module.exports = router;
