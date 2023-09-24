"use strict";
//classes in typescript
class player {
    constructor(height, weight) {
        this.height = 34;
        this.weight = 50;
        this.myheight = () => {
            return this.height;
        };
        this.height = height;
        this.weight = weight;
    }
}
const abhi = new player(100, 150);
console.log(abhi.myheight());
// protected keyboard
