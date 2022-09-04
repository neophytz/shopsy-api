const Cart = require('../model/cart_model');
const http_formatter = require('../util/http_formatter');

const getCartItem = async (request, response) => {
    try {
        const carts = await Cart.find({}).populate('user products');
        // if you want to select and do multiple populate
        // .populate({
        //     path: 'user',
        //     select: 'name phone email address'
        // }).
        // populate({
        //     path: 'products',
        //     select: 'name price description'
        // });
        return response.status(200).json(http_formatter(carts));
    } catch (error) {
        
    }
}

const getUserCart = (request, response) => {

}

const createNewCart = async (request, response) => {
    try {
        const newCart = new Cart(request.body);
        const cart = await Cart.create(newCart);
        return response.status(200).json(http_formatter(cart, "Cart created successfully"));
    } catch (error) {
        return response.status(400).json(http_formatter({}, "something went wrong", false));
    }
}

const updateCart = (request, response) => {

}

const deleteCart = (request, response) => {

}

module.exports = { 
    getCartItem,
    getUserCart,
    createNewCart,
    updateCart,
    deleteCart,
};