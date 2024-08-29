const express = require('express');
server = express();
server.use(express.json());

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/demo-2');
    console.log('database connected');
}

const productRouter = require('./routes/product-route');
server.use('/products', productRouter.router);

server.listen(8080, () => {
    console.log('server started');
});