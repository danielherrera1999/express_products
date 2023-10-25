class ProductRepositoryDom {
    /**
     * Product add.
     * @param {ProductAddRequestDom} _param - .
     * @returns {Promise<Result<Boolean, Failure>>}
     */
    async add(_param) {}

    /**
     * Product add.
     * @returns {Promise<Result<Array<ProductDom>, Failure>>}
     */
    async list() {}
}

module.exports = ProductRepositoryDom;