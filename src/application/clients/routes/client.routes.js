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
    app.post(
        "/api/services/client/add",
        addClientController
    );
    app.get(
        "/api/services/client/price/:user_id/:name_product",
        priceClientController
    );
};