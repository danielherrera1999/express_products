const Result = require('../../../core/utils/result');
const { Failure } = require('../../../core/response/failure/failure.response');
const Clients = require('../modals/client.modal');
const Product = require('../../products/modals/product.modal');
const ClientDom = require('../../../domain/clients/models/client.dom');

class ClientRepositoryImpl {
    /**
     * add of client.
     * @param {ClientAddRequestDom} _param - .
     * @returns {Promise<Result<Boolean, Failure>>}
     */
    async add(_param) {
        try {
            const newClient = new Clients({
                name: _param.name,
                specialPrices: _param.specialPrices,
            });

            await newClient.save();

            return new Result.Right(true);
        } catch (error) {
            return new Result.Left('Failed to add product');
        }
    }

    /**
     * Client filter price.
     * * @param {ClientPriceRequestDom} _param - .
     * @returns {Promise<Result<long, Failure>>}
     */
    async getPrice(_param) {
        try {
            const client = await ClientModel.findById(_param.getUser_id());
            if (!client) {
                return new Result.Left('Client not found');
            }

            const clientDom = new ClientDom(
                clientFromMongo._id,
                clientFromMongo.name,
                clientFromMongo.specialPrices
            );

            const product = await Product.findOne({ name: _param.getName_product() });

            if (!product) {
                return new Result.Left('Product not found');
            }



            const specialPrice = clientDom.getSpecialPrice(product.brand, product.name);

            if (specialPrice !== null) {
                return new Result.Right(specialPrice);
            } else {
                return new Result.Right(1000);
            }
        } catch (error) {
            log(error)
            return new Result.Left('Error server');
        }
    }
}

module.exports = ClientRepositoryImpl;