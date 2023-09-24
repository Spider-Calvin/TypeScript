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
    }
}
const abhi = new player(100, 150, 20);
console.log(abhi.myheight());
console.log(abhi.weight);
// protected keyboard can only b extended in subclass
class ProPlayer extends player {
    constructor(height, weight, age, special) {
        super(height, weight, age);
        this.special = special;
        this.getheight = () => this.age;
        this.special = special;
    }
}
const spider = new ProPlayer(100, 150, 20, 10);
console.log(spider.getheight());
