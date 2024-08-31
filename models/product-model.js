const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    age: {type: Number, min: 10, max: 50},
    quote: {type: String, required: true, unique: true},
    author: String
});

exports.Product = mongoose.model('Product', productSchema);