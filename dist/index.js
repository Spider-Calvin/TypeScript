"use strict";
class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = String(Math.random() * 1000);
        this.lol = false;
        this.getId = () => this.id;
    }
}
const spider = new Product('calvin', 10, 20);
