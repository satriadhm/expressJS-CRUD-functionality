const Product = require('../models/productModel');

class ProductService {
    static async create(data) {
        return Product.create(data);
    }

    static async findAll() {
        return Product.find();
    }

    static async findById(id) {
        return Product.findById(id);
    }

    static async delete(id) {
        return Product.findByIdAndDelete(id);
    }
}

module.exports = ProductService;