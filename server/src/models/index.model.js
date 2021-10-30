const mongoose = require('mongoose');

async function Connection(){
    try {
        await mongoose.connect('mongodb://localhost:27017/books')
        .then(console.log('DB is connected'))
        .catch((err) => console.log(err))
    } catch (error) {
        return error;
    }
}

module.exports = Connection;