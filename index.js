const express = require('express');
const productRouter = require('./routes/product');

server = express();
server.use(express.json());

server.use('/products', productRouter.router);

server.listen(8080, () => {
    console.log('server started');
});