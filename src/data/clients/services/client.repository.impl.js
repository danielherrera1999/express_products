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
            const user_id = _param.getUser_id();

            const client = await Clients.findById(user_id);
            if (!client) {
                return new Result.Left('Client not found');
            }

            const product_name = _param.getName_product();

            const product = await Product.findOne({ name: product_name });
            if (!product) {
                return new Result.Left('Product not found');
            }

            const clientDom = new ClientDom(
                client._id,
                client.name,
                client.specialPrices
            );

            const specialPrice = clientDom.getSpecialPrice(product.brand, product_name);

            if (specialPrice !== null) {
                return new Result.Right(specialPrice);
            } else {
                return new Result.Right(product.price);
            }
        } catch (error) {
            log(error)
            return new Result.Left('Error server');
        }
    }
}

module.exports = ClientRepositoryImpl;