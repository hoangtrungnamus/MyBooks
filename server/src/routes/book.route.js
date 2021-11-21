const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');
const verifyToken = require('../middleware/verifyToken');

router.post('/create', verifyToken, bookController.create);
router.put('/edit', verifyToken, bookController.edit);
router.delete('/delete/:_id', verifyToken, bookController.delete);
router.get('/love', verifyToken, bookController.love);
router.post('/add', verifyToken, bookController.addList);
router.post('/add-love', verifyToken, bookController.addLove);
router.delete('/remove-love/:idBook', bookController.removeLove);
router.get('/', verifyToken, bookController.index);

module.exports = router;