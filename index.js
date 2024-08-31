// Fetch environment variables
require('dotenv').config();

// Initialize Express JS
const express = require('express');

// Using CORS to avoid issues due to using different ports on the same system for frontend and backend 
// - not an issue anymore as REACT is now packaged into static files in the /client/build directory
const cors = require('cors');
const path = require('path');

// Initialize Server
server = express();

// Middleware to parse body into JSON format
server.use(express.json());
// Middleware for handling CORS issues
server.use(cors());

// Middleware for ensuring that the user gets the REACT static files (frontend) when they enter localhost:8080 into the browser
server.use(express.static(path.join(__dirname, 'client/build')));

// MongoDB database
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Function for handling connection to the MongoDB server
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('database connected');
}

// Router (blueprint) for products
const productRouter = require('./routes/product-route');
server.use('/products', productRouter.router);

// Final route for giving a default index.html response, if the browser URL that doesn't match any endpoint in the Express.JS server
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Server Listens on Localhost port 8080
server.listen(8080, () => {
    console.log('server started');
});