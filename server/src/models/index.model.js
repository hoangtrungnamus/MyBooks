const mongoose = require('mongoose');

async function Connection(){
    try {
        await mongoose.connect('mongodb+srv://nampanama:321546@cluster0.uuktt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(console.log('DB is connected'))
        .catch((err) => console.log(err))
    } catch (error) {
        return error;
    }
}

module.exports = Connection;