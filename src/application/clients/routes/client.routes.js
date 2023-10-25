const addClientController = require("../controllers/client.add.controller");
const priceClientController = require("../controllers/client.filter.price.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    /**
     * @swagger
     * /api/services/client/add:
     *   post:
     *     summary: Add a new client
     *     description: Add a new client with the specified details.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *               specialPrices:
     *                 type: array
     *                 items:
     *                   type: object
     *                   properties:
     *                     brand:
     *                       type: string
     *                     product:
     *                       type: string
     *                     specialPrice:
     *                       type: number
     *           example:
     *             name: "Nombre del Cliente"
     *             specialPrices:
     *               - brand: "Marca 1"
     *                 product: "Producto 1"
     *                 specialPrice: 0000
     *     responses:
     *       200:
     *         description: Client added successfully.
     *         content:
     *           application/json:
     *             example:
     *               data: true
     *               msg: Successfully add client
     *               code: 200
     *               success: true
     *               type: SUCCESS
     *     tags:
     *       - Clients
     */
    app.post(
        "/api/services/client/add",
        addClientController
    );
    /**
     * @swagger
     * /api/services/client/price/{user_id}/{name_product}:
     *   get:
     *     summary: Get the special price for a product and client.
     *     description: Get the special price for the specified product and client.
     *     parameters:
     *       - in: path
     *         name: user_id
     *         required: true
     *         description: ID of the client.
     *         schema:
     *           type: string
     *       - in: path
     *         name: name_product
     *         required: true
     *         description: Name of the product.
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Special price retrieved successfully.
     *         content:
     *           application/json:
     *             example:
     *               data: 5000
     *               msg: Successfully price of the product
     *               code: 200
     *               success: true
     *               type: SUCCESS
     *       400:
     *         description: Product not in stock or other error.
     *         content:
     *           application/json:
     *             example:
     *               data: null
     *               msg: Product not stock
     *               code: 400
     *               success: false
     *               type: ERROR
     *     tags:
     *       - Clients
     */
    app.get(
        "/api/services/client/price/:user_id/:name_product",
        priceClientController
    );
};