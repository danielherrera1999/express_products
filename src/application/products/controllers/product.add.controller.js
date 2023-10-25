const ApiResponse = require('../../../core/response/api.response');
const ProductRepositoryImpl = require('../../../data/products/services/product.repository.impl');
const ProductAddUseCaseDom = require('../../../domain/products/usecase/commands/product.add.usecase.dom');
const ProductAddRequestDom = require('../../../domain/products/models/request/product.add.request.dom');

const addProduct = async(req, res) => {
    try {
        const { name, stock, price, brand } = req.body;

        const productRepository = new ProductRepositoryImpl();
        const productAddUseCase = new ProductAddUseCaseDom(productRepository);


        const _param = new ProductAddRequestDom(name, stock, price, brand);

        const result = await productAddUseCase.execute(_param)

        if (result.value !== undefined) {
            const response = ApiResponse.success(result.value, 'Successfully add product', 200);
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

module.exports = addProduct