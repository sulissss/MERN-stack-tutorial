const express = require('express');

router = express.Router();
const productController = require('../controller/product');

router
    .post('/:id', productController.createProducts)
    .get('/', productController.getAllProducts)
    .get('/:id', productController.getProduct)
    .put('/:id', productController.putProduct)
    .patch('/:id', productController.patchProduct)
    .delete('/:id', productController.deleteProduct);

exports.router = router;