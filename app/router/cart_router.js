const express = require('express');
const Router = express.Router();
const _controller = require('../controller/cart_controller')

Router.get('/', _controller.getCartItem); // admin level
Router.get('/:user_id', _controller.getUserCart);
Router.post('/', _controller.createNewCart);
Router.put('/', _controller.updateCart);
Router.delete('/', _controller.deleteCart);

module.exports = Router;