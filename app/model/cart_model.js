const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    // user and product!!
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    products: {
        type: [Schema.Types.ObjectId],
        ref: 'Product',
        default: [],
        required: false,
    }
}, {timestamps: true, versionKey: false});

module.exports = mongoose.model('Cart', cartSchema);