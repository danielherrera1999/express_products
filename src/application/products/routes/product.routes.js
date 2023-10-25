const listProductController = require("../controllers/product.list.controller");
const addProductController = require("../controllers/product.add.controller");

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
     * /api/services/product/list:
     *   post:
     *     summary: List of products
     *     description: List all products in stock.
     *     tags:
     *       - Products
    *     responses:
    *       200:
    *         description: A list of products with stock.
    *         content:
    *           application/json:
    *             example:
    *               data: [
    *                 {
    *                   id: 'xxxxxxx',
    *                   name: 'xxxx',
    *                   stock: x,
    *                   price: 000000,
    *                   brand: 'xxxxxx'
    *                 },
    *               ]
    *               msg: Successfully list product
    *               code: 200
    *               success: true
    *               type: SUCCESS

     */
    app.post(
        "/api/services/product/list",
        listProductController
    );
    /**
     * @swagger
     * /api/services/client/product/add:
     *   post:
     *     summary: Add a new product
     *     description: Add a new product with the specified details.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *               stock:
     *                 type: integer
     *               price:
     *                 type: number
     *               brand:
     *                 type: string
     *           example:
     *             name: "xxxxx"
     *             stock: 0
     *             price: 00000
     *             brand: "xxxxx"
     *     responses:
     *       200:
     *         description: Product added successfully.
     *         content:
     *           application/json:
     *             example:
     *               data: true
     *               msg: Successfully add product
     *               code: 200
     *               success: true
     *               type: SUCCESS
     *     tags:
     *       - Products
     */
    app.post(
        "/api/services/product/add",
        addProductController
    );
};