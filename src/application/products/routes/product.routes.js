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
    app.post(
        "/api/services/product/list",
        listProductController
    );
    app.post(
        "/api/services/product/add",
        addProductController
    );
};