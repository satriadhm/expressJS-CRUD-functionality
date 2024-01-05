const express = require("express");
const router = express.Router();
const userRoute = require("./user");
const productRoute = require("./product");
const transactionRoute = require("./transaction");

router.use("/users", userRoute);
router.use("/products", productRoute);
router.use("/transactions", transactionRoute);

module.exports = router;

