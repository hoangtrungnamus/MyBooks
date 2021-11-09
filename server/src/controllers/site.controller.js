const BookReviews = require('../models/bookreview.model');


class SiteController{
    async index(req, res, next){
        try {
            const booksreview = await BookReviews.find({}).lean();
            if(BookReviews){
                return res.status(200).json({success: true, booksreview});
            }
            return res.status(200).json({status: 200, message: 'This collection is empty.'});
        } catch (error) {
            return error;
        }
    }
}

module.exports =new SiteController;