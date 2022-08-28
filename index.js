require('dotenv').config();

const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

const app = express();

app.use(cors());

app.use(bodyParser.json());

// shopping api

app.use('/cart', require('./app/router/cart_router'));
app.use('/user', require('./app/router/user_router'));

/**
 * /cart 
 * /order 
 * /products 
 * /user 
 * /whishlist -> task 
 * /offers -> task
 * /reviews -> task
 * /return -> task
*/


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server started on port:${PORT}`));

const DB_URI = process.env.DB_URI;
mongoose.Promise = global.Promise;

const _option = {
    socketTimeoutMS: 0,
    keepAlive: true,
    useNewUrlParser: true,
};

mongoose.connect(DB_URI, _option).then(()=> console.log(`DB connected`)).catch(err=> {
    console.error(err);
    // optional things - if you want you can also terminate the server
    process.exit(1); // 1 means some error has occurred.
});