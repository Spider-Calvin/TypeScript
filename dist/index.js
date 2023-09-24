"use strict";
//classes in typescript
class player {
    constructor(height, weight, age) {
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.myheight = () => {
            return this.height;
        };
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.id = String(Math.random() * 100);
    }
    get getHeight() {
        return this.height;
    }
    set setHeight(value) {
        this.height = value;
    }
}
const abhi = new player(100, 150, 20);
console.log('Height', abhi.getHeight);
abhi.setHeight = 500;
console.log('setted Height', abhi.getHeight);
