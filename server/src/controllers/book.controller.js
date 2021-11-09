const Books = require('../models/book.model');

class BookController {
    async index(req, res, next) {
        const { userId } = { ...req.params };
        try {
            const books = await Books.find({ userId: userId}).lean();
            if (books) {
                return res.status(200).json({ success: true, books });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async create(req, res, next) {
        const { title, image, userId } = { ...req.body };
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

    async delete(req, res, next){
        const {_id} = {... req.body};
        try {
            const book = Books.findById({_id}).lean();
            if(book){
                await Books.deleteOne({_id});
                return res.status(200).json({ success: true, message: 'This book is deleted'});
            }
            return res.status(400).json({ success: false, message: 'Failed to delete book'});
        } catch (error) {
            return error;
        }
    }

}

module.exports = new BookController;