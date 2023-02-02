const express = require("express");
const TransactionController = require("../controllers/transaction");
const router = express.Router();

router.post("/register", TransactionController.register);
router.get("/", TransactionController.transactions);
router.get("/:id", TransactionController.transaction);
router.delete("/:id", TransactionController.delete);

module.exports = router;