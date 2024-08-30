const { Product } = require('../models/product-model');

exports.addProducts = async (req, res) => {
    await Product.insertMany(req.body);
    res.status(201).json({'msg': 'Product(s) added successfully'});
}

exports.getAllProducts = async (req, res) => {
    res.json(await Product.find({}));
}

exports.getProduct = async (req, res) => {
    res.json(await Product.findById(req.params.id));
}

exports.updateProduct = async (req, res) => {
    res.json(await Product.findByIdAndUpdate(req.params.id, req.body));
}

exports.deleteProduct = async (req, res) => {
    res.json(await Product.findByIdAndDelete(req.params.id));
}