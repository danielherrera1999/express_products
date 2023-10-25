const ApiResponse = require('../../../core/response/api.response');
const ProductRepositoryImpl = require('../../../data/products/services/product.repository.impl');
const ProductListUseCaseDom = require('../../../domain/products/usecase/queries/product.list.usecase.dom');

const listProduct = async(req, res) => {
    try {
        const productRepository = new ProductRepositoryImpl();
        const productListUseCase = new ProductListUseCaseDom(productRepository);


        const result = await productListUseCase.execute()

        if (result.value !== undefined) {
            const response = ApiResponse.success(result.value, 'Successfully list product', 200);
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

module.exports = listProduct