const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    stock: Number,
    price: Number,
    brand: String,
});

module.exports = mongoose.model('Products', productSchema);