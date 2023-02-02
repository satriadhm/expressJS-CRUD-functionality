const express = require("express");
const router = express.Router();
const userRoute = require("./user");
const productRoute = require("./product");
const transactionRoute = require("./transaction");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world!",
  });
});

router.use("/users", userRoute);
router.use("/products", productRoute);
router.use("/transactions", transactionRoute);
module.exports = router;
