const Result = require('../../../core/utils/result');
const { Failure } = require('../../../core/response/failure/failure.response');
const ProductMongo = require('../modals/product.modal');
const ProductDom = require('../../../domain/products/models/product.dom');

class ProductRepositoryImpl {
    /**
     * add of product.
     * @param {ProductAddRequestDom} _param - .
     * @returns {Promise<Result<Boolean, Failure>>}
     */
    async add(_param) {
        try {
            const newProduct = new ProductMongo({
                name: _param.name,
                stock: _param.stock,
                price: _param.price,
                brand: _param.brand,
            });

            await newProduct.save();

            return new Result.Right(true);
        } catch (error) {
            return new Result.Left('Failed to add product');
        }
    }

    /**
     * list of product.
     * @returns {Promise<Result<Array<TaskDom>, Failure>>}
     */
    async list() {
        try {
            const products = await ProductMongo.find({ stock: { $gt: 0 } });

            const productList = products.map(product => {
                const productDom = new ProductDom(
                    product._id,
                    product.name,
                    product.stock,
                    product.price,
                    product.brand,
                );
                return productDom;
            });

            return new Result.Right(productList);
        } catch (error) {
            log(error)
            return new Result.Left('Error server');
        }
    }
}

module.exports = ProductRepositoryImpl;