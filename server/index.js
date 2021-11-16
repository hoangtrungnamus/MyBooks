// cors
// import modules

const cors = require('cors');
const express = require('express');
const routes = require('./src/routes/index.route');
require("dotenv").config();
const mongoose = require('mongoose');
const { createProxyMiddleware } = require('http-proxy-middleware');

async function Connection(){
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.uuktt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
        .then(console.log('DB is connected'))
        .catch((err) => console.log(err))
    } catch (error) {
        return error;
    }
}

Connection();


// use module
const app = express();
// global variables
app.use('/api', createProxyMiddleware({ target: 'http://www.example.org', changeOrigin: true }));
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

routes(app);
// body
app.listen(PORT, ()=>console.log(`App is listening at port ${PORT}`));

