require('dotenv').config();

const express = require('express')
const cors = require("cors")

const app = express()


var corsOptions = {
    origin: process.env.URL_CORS
}

//  Parser requests of content-type to application/json
app.use(express.json())

//  Parser requests of content-type to application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

/// Connect to bda
require('./core/config/db.config');

// Simple router example
app.get("/server-on", (req, res) => {
    res.json({ message: "WELCOME SERVER ON" })
})

// routes
require('./application/products/routes/product.routes')(app);
require('./application/clients/routes/client.routes')(app);

// Set port , listen server
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}. `);
    console.log(`SERVER IS RUNNING ON PORT ${process.env.URL} `);
})