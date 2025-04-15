const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Register route
router.post('/register', authController.register);

// Login route
router.post('/login', authController.login);

// Forgot password route
router.post('/forgot-password', authController.forgotPassword);

// Reset password route
router.post('/reset-password', authController.resetPassword);

module.exports = router; 