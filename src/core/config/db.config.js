const mongoose = require('mongoose');

let selectedURL = process.env.NODE_ENV === 'production' ? process.env.URLBDA : process.env.URLBDALOCAL;

mongoose.connect(selectedURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connection to the database successful');
});

module.exports = mongoose;