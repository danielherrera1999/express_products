const Result = require('../../../../core/utils/result');
const { Failure } = require('../../../../core/response/failure/failure.response');
const ProductRepositoryDom = require('../../repository/product.repository.dom');


const productRepositoryDom = new ProductRepositoryDom();


class ProductAddUseCaseDom {
    constructor(productRepositoryDom) {
            this.productRepositoryDom = productRepositoryDom;
        }
        /**
         * Product  Add.
         * @param {ProductAddRequestDom} _param - .
         * @returns {Promise<Result<boolean, Failure>>}
         */
    async execute(_param) {
        try {
            // Called the repository
            const isValue = await this.productRepositoryDom.add(_param);
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

module.exports = ProductAddUseCaseDom