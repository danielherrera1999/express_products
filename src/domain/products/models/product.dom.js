class ProductDom {
    constructor(id, name, stock, price, brand) {
        this.id = id;
        this.name = name;
        this.stock = stock;
        this.price = price;
        this.brand = brand;
    }

    getId() {
        return this.name;
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

    setId(newValue) {
        this.id = newValue;
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

module.exports = ProductDom;