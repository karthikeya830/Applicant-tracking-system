const express = require('express');
const userController = require('../Controllers/UserControllers');
const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/',userController.registerUser)
router.post('/login', userController.authUser)

module.exports = router