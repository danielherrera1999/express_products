const Result = require('../../../../core/utils/result');
const { Failure } = require('../../../../core/response/failure/failure.response');
const ProductRepositoryDom = require('../../repository/product.repository.dom');
const ProductDom = require('../../models/product.dom');


const productRepositoryDom = new ProductRepositoryDom();


class ProductListUseCaseDom {
    constructor(productRepositoryDom) {
            this.productRepositoryDom = productRepositoryDom;
        }
        /**
         * Sign up of user.
         * @returns {Promise<Result<Array<ProductDom>, Failure>>}
         */
    async execute(_param) {
        try {
            // Called the repository
            const value = await this.productRepositoryDom.list();
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

module.exports = ProductListUseCaseDom