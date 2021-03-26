const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();

// Middleware is a function that executes when routes are being called 
// app.use('/', () => {
//      function that you'd like to perform, this would be an example for
//      middle ware
//});

// declare middleware to make sure we are parsing post info as json (bodyParser)
// if we need to use the api across domains, do...
// app.use(cors());
app.use(bodyParser.json());
app.use(cors());
// Import Routes
const postRoutes = require('./routes/post');
const getRoutes = require('./routes/get');

// declare middleware to go to the correct sub routes
app.use('/post', postRoutes);
app.use('/get', getRoutes);
// Routes for the api
// app.get('/', (req, res) => {
//     res.send('We are home');
// });

// Connect to the database
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connected to the DB')
);



// Listen for our requests (default port 3001)
app.listen(3001);



/**
 * Notes for future reference
 * install nodemon for auto refresh node enviornment
 * install express for api routing
 * install dotenv to conceal the credentials to the database 
 */