class ClientDom {
    constructor(id, name, specialPrices = []) {
        this.id = id;
        this.name = name;
        this.specialPrices = specialPrices;
    }

    getId() {
        return this.name;
    }

    getName() {
        return this.name;
    }

    setId(newValue) {
        this.id = newValue;
    }

    setName(newValue) {
        this.name = newValue;
    }

    getSpecialPrice(brand, productName) {
        const specialPrices = this.specialPrices.find(
            (brandPriceSpecial) => {
                return brandPriceSpecial.prices.find(
                    (productPrice) => {
                        return productPrice.product === productName && brandPriceSpecial.brand === brand
                    }
                )
            }

        );
        return specialPrices ? specialPrices.prices[0].specialPrices : null;
    }
}

module.exports = ClientDom;