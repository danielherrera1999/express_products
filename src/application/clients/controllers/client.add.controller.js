const ApiResponse = require('../../../core/response/api.response');
const ClientRepositoryImpl = require('../../../data/clients/services/client.repository.impl');
const ClientAddUseCaseDom = require('../../../domain/clients/usecase/commands/client.add.usecase.dom');
const ClientAddRequestDom = require('../../../domain/clients/models/request/client.add.request.dom');

const addClient = async(req, res) => {
    try {
        const { name, specialPrices } = req.body;

        const clientRepository = new ClientRepositoryImpl();
        const clientAddUseCaseDom = new ClientAddUseCaseDom(clientRepository);


        const _param = new ClientAddRequestDom(name);
        specialPrices.forEach(({ brand, product, specialPrice }) => {
            _param.addPriceSpecial(brand, product, specialPrice);
        });

        const result = await clientAddUseCaseDom.execute(_param)

        if (result.value !== undefined) {
            const response = ApiResponse.success(result.value, 'Successfully add client', 200);
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

module.exports = addClient