const express = require('express');
const fs = require('fs');

DATA_PATH = 'data.json'

server = express();
server.use(express.json());

const getProducts = () => {
    return JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
}

const writeProducts = (products) => {
    fs.writeFileSync(DATA_PATH, JSON.stringify(products, null, 2));
}

// CREATE
server.post('/products/:id', (req,res) => {
    const newProduct = {['id']: +req.params.id, ...req.body};
    
    const products = getProducts();
    products.unshift(newProduct);
    writeProducts(products);

    res.status(201).json(newProduct);
})

// READ
server.get('/products', (req, res) => {
    res.json(getProducts());
})

server.get('/products/:id', (req, res) => {
    console.log(req.params.id);
    res.json(getProducts().find(p => p.id == req.params.id));
})

// UPDATE
server.put('/products/:id', (req, res) => {
    const newProduct = {['id']: +req.params.id, ...req.body};
    const products = getProducts();

    const prodID = products.findIndex(p => p.id == req.params.id);
    products[prodID] = newProduct;

    writeProducts(products);
    res.status(202).json(newProduct);
})

server.patch('/products/:id', (req, res) => {
    const quotes = getProducts(); // Get the existing quotes
    const quoteId = +req.params.id; // Extract the ID from the request parameters
    const updates = req.body; // Get the update object from the request body

    // Find the index of the quote with the given ID
    const quoteIndex = quotes.findIndex(q => q.id === quoteId);

    if (quoteIndex === -1) {
        return res.status(404).json({ message: 'Quote not found' });
    }

    // Update the quote's properties with the new values
    quotes[quoteIndex] = { ...quotes[quoteIndex], ...updates };

    // Write the updated quotes back to the file
    writeProducts(quotes);

    res.status(200).json(quotes[quoteIndex]); // Respond with the updated quote
})

// DELETE
server.delete('/products/:id', (req, res) => {
    const products = getProducts();
    writeProducts(products.filter(p => p.id !== (+req.params.id)));
    res.send('Deleted');
})

// console.log(getProducts().length);

server.listen(8080, () => {
    console.log('server started');
});