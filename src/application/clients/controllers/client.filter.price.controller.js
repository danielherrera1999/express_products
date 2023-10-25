const ApiResponse = require('../../../core/response/api.response');
const ClientRepositoryImpl = require('../../../data/clients/services/client.repository.impl');
const ClientPriceRequestDom = require('../../../domain/clients/models/request/client.price.request.dom');
const ClientPricesUseCaseDom = require('../../../domain/clients/usecase/queries/client.prices.usecase.dom');

const ClientFilterPriceProduct = async(req, res) => {
    try {
        const { user_id, name_product } = req.params;

        const clientRepositoryImpl = new ClientRepositoryImpl();
        const clientPricesUseCaseDom = new ClientPricesUseCaseDom(clientRepositoryImpl);

        const _param = new ClientPriceRequestDom(user_id, name_product);


        const result = await clientPricesUseCaseDom.execute(_param)

        if (result.value !== undefined) {
            const response = ApiResponse.success(result.value, 'Successfully price  of the product', 200);
            res.status(200).json(response);
        } else {
            const errorMessage = result.error;
            const response = ApiResponse.error(errorMessage, 400);
            res.status(400).json(response);
        }

    } catch (error) {
        const response = ApiResponse.error(error, 500);
        res.status(500).json(response);
    }
}

module.exports = ClientFilterPriceProduct