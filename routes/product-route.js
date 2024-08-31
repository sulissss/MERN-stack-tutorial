const express = require('express');

router = express.Router();
const productController = require('../controller/product-controller');

router
    .post('/', productController.addProducts)
    .get('/', productController.getAllProducts)
    .get('/:id', productController.getProduct)
    .put('/:id', productController.updateProduct)
    // .patch('/:id', productController.patchProduct)
    .delete('/:id', productController.deleteProduct);

exports.router = router;