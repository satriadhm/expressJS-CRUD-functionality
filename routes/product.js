const express = require("express");
const ProductController = require("../controllers/product");
const router = express.Router();

router.post("/register", ProductController.register);
router.get("/", ProductController.products);
router.get("/:id", ProductController.product);
router.delete("/:id", ProductController.delete);

module.exports = router;
