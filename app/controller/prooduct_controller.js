const Product = require('../model/product_model');
const http_formatter = require('../util/http_formatter');

const createProduct = async (request, response) => {
    try {
        const product = await Product.create(request.body);
        return response.status(201).json(
            http_formatter(product, "product created successfully"),
        );
    } catch ( err ) {
        return response.status(400).json(http_formatter(err, "Something went wrong, please try again", false));
    }
}
const getProdItem = async (request, response) => {
    try {
        const {pageNo, perPage} = request.query;
        const product = await Product.find({}).skip(pageNo * (perPage - 1)).limit(perPage);
        return response.status(200).json(http_formatter(product,"product fetched successfully"));
    } catch (error) {
        console.log(error);
        return response.status(400).json(http_formatter(error, "Something went wrong, please try again", false));
    }
}

module.exports ={createProduct,getProdItem}