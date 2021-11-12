const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoveBooksSchema = new Schema({
    userId: {type: String},
    idBook: {type: String},
    title: {type: String},
    image: {type: String}
})

module.exports = mongoose.model('lovebook', LoveBooksSchema);