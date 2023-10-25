const Result = require('../../../../core/utils/result');
const { Failure } = require('../../../../core/response/failure/failure.response');
const ClientRepositoryDom = require('../../repository/client.repository.dom');



const clientRepositoryDom = new ClientRepositoryDom();


class ClientAddUseCaseDom {
    constructor(clientRepositoryDom) {
            this.clientRepositoryDom = clientRepositoryDom;
        }
        /**
         * Client  Add.
         * @param {ClientAddRequestDom} _param - .
         * @returns {Promise<Result<boolean, Failure>>}
         */
    async execute(_param) {
        try {
            // Called the repository
            const isValue = await this.clientRepositoryDom.add(_param);
            // condition of successfull
            if (isValue.value !== undefined) {
                return new Result.Right(isValue.value);
            } else {
                return new Result.Left(isValue.error);
            }
        } catch (error) {
            return new Result.Left(error);
        }
    }
}

module.exports = ClientAddUseCaseDom