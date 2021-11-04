const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

router.post('/create', bookController.create);
router.get('/:userId', bookController.index);

module.exports = router;