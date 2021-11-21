const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const verifyToken = require('../middleware/verifyToken');



router.get('/validedToken', verifyToken, authController.valid);
router.post('/register', authController.register);
router.post('/login', authController.login);
module.exports = router;