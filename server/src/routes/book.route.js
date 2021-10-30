const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

router.post('/', bookController.index);
router.post('/create', bookController.create);

module.exports = router;