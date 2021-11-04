const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    userId: Schema.Types.ObjectId,
    title: {type: String, unique: false},
    image: {type: String},
    createdAt: {type: Date, default: Date.now()}
    
})

module.exports = mongoose.model('books', BookSchema);