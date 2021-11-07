const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoose_delete = require('mongoose-delete');

const BookSchema = new Schema({
    userId: Schema.Types.ObjectId,
    title: {type: String, unique: false},
    image: {type: String},
    createdAt: {type: Date, default: Date.now()}
})

BookSchema.plugin(mongoose_delete, {overrideMethods: true});

module.exports = mongoose.model('books', BookSchema);