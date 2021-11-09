const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookReviewSchema = new Schema({
    title: {type: String, unique: true},
    image: {type: String}
})

module.exports = mongoose.model('reiview', BookReviewSchema);