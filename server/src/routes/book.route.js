const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

router.post('/create', bookController.create);
router.post('/edit', bookController.edit);
router.post('/delete', bookController.delete);
router.get('/love/:userId', bookController.love);
router.post('/add', bookController.addList);
router.post('/add-love', bookController.addLove);
router.post('/remove-love', bookController.removeLove);
router.get('/:userId', bookController.index);

module.exports = router;