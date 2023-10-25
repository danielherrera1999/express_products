const Result = require('../../../core/utils/result');
const { Failure } = require('../../../core/response/failure/failure.response');
const ProductMongo = require('../modals/product.modal');

class ProductRepositoryImpl {
    /**
     * add of product.
     * @param {ProductAddRequestDom} _param - .
     * @returns {Promise<Result<Boolean, Failure>>}
     */
    async add(_param) {
        try {
            const newProduct = new ProductMongo({
                nombre: _param.title,
                stock: _param.stock,
                precio: _param.precio,
                marca: _param.marca,
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
            const products = await ProductMongo.find();

            const productList = products.map(product => {
                const productDom = new ProductDom(
                    product._id,
                    product.nombre,
                    product.stock,
                    product.precio,
                    product.marca,
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