class ClientAddRequestDom {
    constructor(name, specialPrices = []) {
        this.name = name;
        this.specialPrices = specialPrices;
    }

    getName() {
        return this.name;
    }

    setName(newValue) {
        this.name = newValue;
    }

    addPriceSpecial(brand, product, specialPrices) {
        this.specialPrices.push({
            brand,
            prices: [{
                product,
                specialPrices,
            }, ],
        });
    }
}

module.exports = ClientAddRequestDom;