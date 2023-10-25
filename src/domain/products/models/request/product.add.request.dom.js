class ProductAddRequestDom {
    constructor(name, stock, price, brand) {
        this.name = name;
        this.stock = stock;
        this.price = price;
        this.brand = brand;
    }

    getName() {
        return this.name;
    }

    getStock() {
        return this.stock;
    }

    getPrice() {
        return this.price;
    }

    getBrand() {
        return this.brand;
    }

    setName(newValue) {
        this.name = newValue;
    }

    setStock(newValue) {
        this.stock = newValue;
    }

    setPrice(newValue) {
        this.price = newValue;
    }

    setBrand(newValue) {
        this.brand = newValue;
    }
}

module.exports = ProductAddRequestDom;