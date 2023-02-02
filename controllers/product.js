const { getDb } = require("../config/mongodbConfig");
const Product = require("../models/product");

class ProductController {
    static async items(req, res, next) {
        getDb()
            .collection("products")
            .find()
            .toArray()
            .then((data) => console.log(data));
        res.status(200).json("ok");
    }

    static async register(req, res, next) {
        try {
            const { name, price, stock, image } = req.body;

            if (!name) throw { name: "Name is required" };
            if (!price) throw { name: "Price is required" };
            if (!stock) throw { name: "Stock is required" };
            if (!image) throw { name: "Image is required" };

            const product = await Product.create({
                name,
                price,
                stock,
                image,
            });

            res.status(201).json({
                _id: product.insertedId,
                name,
            });
        } catch (err) {
            next(err);
        }
    }
    static async products(req, res, next) {
        try {
            await Product.findAll().then((products) => {
                res.status(200).json(products);
            });
        } catch (err) {
            next(err);
        }
    }
    
    static async product(req, res, next) {
        try {
            const id = req.params.id;
            const product = await Product.findById(id);
            if (!product) throw { name: "Product not found" };
    
            res.status(200).json(product);
        } catch (err) {
            next(err);
        }
    }

    static async delete (req,res,next) {
        try {
            const id = req.params.id;
            const product = await Product.findById(id);
            if (!product) throw { name: "Product not found" };
    await Product.destroy(id);
            res.status(200).json({message: `Product ${product.name} successfully deleted`});
        } catch (err) {
            next(err);
        }
    }

}

module.exports = ProductController;