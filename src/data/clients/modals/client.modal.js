const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: String,
    specialPrices: [{
        brand: String,
        prices: [{
            product: String,
            specialPrices: Number,
        }, ],
    }, ],
});

module.exports = mongoose.model('Clients', clientSchema);