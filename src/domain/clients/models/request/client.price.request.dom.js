class ClientPriceRequestDom {
    constructor(user_id, name_product) {
        this.user_id = user_id;
        this.name_product = name_product;
    }

    getUser_id() {
        return this.user_id;
    }

    setUser_id(newValue) {
        this.user_id = newValue;
    }

    getName_product() {
        return this.name_product;
    }

    setName_product(newValue) {
        this.name_product = newValue;
    }
}

module.exports = ClientPriceRequestDom;