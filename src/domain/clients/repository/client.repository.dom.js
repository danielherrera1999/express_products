class ClientRepositoryDom {
    /**
     * Client add.
     * @param {ClientAddRequestDom} _param - .
     * @returns {Promise<Result<Boolean, Failure>>}
     */
    async add(_param) {}

    /**
     * Client filter price.
     * * @param {ClientPriceRequestDom} _param - .
     * @returns {Promise<Result<long, Failure>>}
     */
    async getPrice(_param) {}
}

module.exports = ClientRepositoryDom;