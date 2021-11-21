const Books = require('../models/book.model');
const LoveBook = require('../models/lovebooks.model');

class BookController {
    async index(req, res, next) {
        const userId = req.userId.concat();
        try {
            const books = await Books.find({ userId }).lean();
            if (books) {
                return res.status(200).json({ success: true, books });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    // Book of user
    async create(req, res, next) {
        const { title, image } = { ...req.body };
        const userId = req.userId.concat('');
        try {
            if (!image || !title) {
                return res.status(400).json({ success: false, message: `You need to provide a title and image of your book` });
            }
            const newBook = new Books({ title, image, userId });
            await newBook.save();
            return res.status(200).json({ success: true, message: 'Adding into list successfully' });
        } catch (error) {
            console.log(error);
        }
    }

    async edit(req, res, next) {
        const { title, image, _id } = { ...req.body };
        try {
            const book = Books.find({ _id: _id }).lean();
            if (book) {
                await book.updateOne({ title, image });
                return res.status(200).json({ success: true, message: 'Update successfully!' });
            }
        } catch (error) {
            return error;
        }
    }

    async delete(req, res, next) {
        const { _id } = { ...req.params };
        try {
            const book = Books.findById({ _id }).lean();
            if (book) {
                await Books.deleteOne({ _id });
                return res.status(200).json({ success: true, message: 'This book is deleted' });
            }
            return res.status(400).json({ success: false, message: 'Failed to delete book' });
        } catch (error) {
            return error;
        }
    }

    async love(req, res, next) {
        const  userId = req.userId.concat('');
        try {
            const lovebooks = await LoveBook.find({ userId }).lean();
            if (lovebooks) {
                return res.status(200).json({ success: true, lovebooks });
            }
            return res.status(400).json({ success: false });
        } catch (error) {
            return error;
        }
    }


    async addList(req, res, next) {
        const { _id, userId, title, image } = { ...req.body };
        try {
            const newBook = new Books({ userId, title, image });
            await newBook.save();
            await LoveBook.deleteOne({ _id });
            return res.status(200).json({ success: true })
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async addLove(req, res, next) {
        const { idBook, title, image } = { ...req.body };
        const userId = req.userId.concat();
        try {
            const newBook = new LoveBook({ idBook, userId, title, image });
            await newBook.save();
            return res.status(200).json({ success: true })
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async removeLove(req, res, next) {
        const { idBook } = { ...req.params };
        try {
            await LoveBook.deleteOne({ idBook });
            
            return res.status(200).json({ success: true })
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

}

module.exports = new BookController;