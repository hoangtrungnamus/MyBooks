
const siteController = require('../controllers/site.controller');
const authRoute = require('./auth.route');
const bookRoute = require('./book.route');
function route(app){
    // for single page
    app.get('/', siteController.index)
    // for user
    app.use('/users', authRoute);
    // for books
    app.use('/books', bookRoute);
}

module.exports = route;