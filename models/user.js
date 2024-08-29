const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {type: String, required: true},
    language: String,
    bio: String,
    version: {type: Number, min: 1, max: 10}
});

exports.Users = mongoose.model('User', userSchema);