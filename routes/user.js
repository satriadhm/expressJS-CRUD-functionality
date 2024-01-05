const express = require("express");
const UserController = require("../controllers/user");
const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/", UserController.users);
router.get("/:id", UserController.user);
router.delete("/:id", UserController.delete);

module.exports = router;
