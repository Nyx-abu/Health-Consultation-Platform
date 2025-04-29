const express = require('express');
const { register, login, adminLogin, googleLogin } = require('../controllers/authController');

const router = express.Router();

// User authentication routes
router.post('/register', register);
router.post('/login', login);
router.post('/admin/login', adminLogin);
router.post('/google-login', googleLogin);

module.exports = router;