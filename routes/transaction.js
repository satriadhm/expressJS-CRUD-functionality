const express = require("express");
const TransactionController = require("../controllers/transaction");
const authToken = require("../middlewares/authenticate");
const router = express.Router();
router.use(authToken);

router.post("/register", TransactionController.addTransaction);
router.get("/", TransactionController.getAllTransactions);
router.get("/:id", TransactionController.getTransaction);
router.delete("/:id", TransactionController.deleteTransaction);

module.exports = router;