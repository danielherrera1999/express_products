const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API documentation',
            version: '1.0.0',
            description: 'This is the documentation of the technical test APIs',
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
        },
        servers: [{
                url: "http://localhost:8001",
            },
            {
                url: "http://example:8001",
            }
        ],
    },
    apis: [
        './src/application/products/routes/product.routes.js',
        './src/application/clients/routes/client.routes.js'
    ],
};

const specs = swaggerJsdoc(options);

function swaggerDocs(app, port) {
    app.use('/', swaggerUi.serve, swaggerUi.setup(specs));

    app.get('docs.json', (req, res) => {
        res.setHeader('content-type', 'application/json')
        res.send(specs)
    })
}

module.exports = swaggerDocs;