// cors
// import modules

const cors = require('cors');
const express = require('express');
const routes = require('./src/routes/index.route');
require("dotenv").config();
const mongoose = require('mongoose');


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
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });

routes(app);
// body
app.listen(PORT, ()=>console.log(`App is listening at port ${PORT}`));

