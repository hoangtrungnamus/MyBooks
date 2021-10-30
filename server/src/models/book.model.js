const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    userId: Schema.Types.ObjectId,
    createdAt: {type: Date, default: Date.now()}
    
})

module.exports = mongoose.model('books', BookSchema);