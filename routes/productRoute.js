const express = require('express');
const ProductController = require('../controllers/productController');
const authenticate = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authenticate, ProductController.addProduct);
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProduct);
router.delete('/:id', authenticate, ProductController.deleteProduct);

module.exports = router;
