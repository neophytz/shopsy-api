require('dotenv').config();

const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());

// shopping api

/**
 * /cart 
 * /whishlist -> task 
 * /order 
 * /products 
 * /user 
 * /offers -> task
 * /reviews -> task
 * /return -> task
*/


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`server started on port:${PORT}`));