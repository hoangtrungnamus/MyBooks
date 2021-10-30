const Books = require('../models/book.model');

class BookController {
    async index(req, res, next) {
        const { userId } = { ...req.body };
        try {
            const books = await Books.find({ userId: userId }).lean();
            if (books) {
                return res.status(200).json({ books });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    create(req, res, next) {
        const { title, image, userId } = { ...req.body };
        if (!image || !title) {
            return res.status(400).json({ success: false, message: `You need to provide a title and image of your book` });
        }
        const book = Books.find({title}).lean()
        if(book){
            return res.status(400).json({success: false, message: `This book already exists` });
        }
        const newBook = new Books({ title, image, userId });
        newBook.save();
        return res.status(200).json({ success: true, message: 'Adding into list successfully' });
    }

}

module.exports = new BookController;