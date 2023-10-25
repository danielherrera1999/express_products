const mongoose = require('mongoose');

const mongodbURL = process.env.URLBDA;

mongoose.connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connection to the database successful');
});

module.exports = mongoose;