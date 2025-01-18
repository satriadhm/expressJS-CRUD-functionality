const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUser);

module.exports = router;