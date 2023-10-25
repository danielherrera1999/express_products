const Result = require('../../../../core/utils/result');
const { Failure } = require('../../../../core/response/failure/failure.response');
const ClientRepositoryDom = require('../../repository/client.repository.dom');


const clientRepositoryDom = new ClientRepositoryDom();


class ClientPricesUseCaseDom {
    constructor(clientRepositoryDom) {
            this.clientRepositoryDom = clientRepositoryDom;
        }
        /**
         * Client get price.
         * * * @param {ClientPriceRequestDom} _param - .
         * @returns {Promise<Result<long, Failure>>}
         */
    async execute(_param) {
        try {
            // Called the repository
            const value = await this.clientRepositoryDom.getPrice(_param);
            // condition of successfull
            if (value.value !== undefined) {
                return new Result.Right(value.value);
            } else {
                return new Result.Left(value.error);
            }
        } catch (error) {
            return new Result.Left(error);
        }
    }
}

module.exports = ClientPricesUseCaseDom