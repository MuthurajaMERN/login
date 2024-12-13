const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { validateRegister, validateLogin, validate } = require('../middleware/validateMiddleware');

const router = express.Router();

// Register
router.post('/register', validateRegister, validate, registerUser);

// Login
router.post('/login', validateLogin, validate, loginUser);

module.exports = router;
