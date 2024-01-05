const express = require("express");
const ProductController = require("../controllers/product");
const authToken = require("../middlewares/authenticate");
const router = express.Router();

// Add middleware to the router
router.use(authToken);

router.post("/add", ProductController.addProduct);
router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProduct);
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
