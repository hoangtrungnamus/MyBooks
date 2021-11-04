// cors
// import modules
const cors = require('cors');
const express = require('express');
const routes = require('./src/routes/index.route');
const connect = require('./src/models/index.model');
// use module
const app = express();
connect();
// global variables
const PORT = 4000;
app.use(cors());

app.use(express.json());

routes(app);
app.get('/', (req, res) => {res.send('Helloworld')});

// body
app.listen(PORT, ()=>console.log(`App is listening at port ${PORT}`));

