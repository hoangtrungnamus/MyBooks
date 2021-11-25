const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

router.post('/create', bookController.create);
router.put('/edit', bookController.edit);
router.delete('/delete/:_id', bookController.delete);
router.get('/love/:userId', bookController.love);
router.post('/add', bookController.addList);
router.post('/add-love', bookController.addLove);
router.delete('/remove-love/:idBook', bookController.removeLove);
router.get('/:userId', bookController.index);

module.exports = router;