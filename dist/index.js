"use strict";
//Generics in typescript Most Important topic in typescript
const func = (n) => {
    const text = n;
    return n;
};
const ans = func(20);
const ans2 = func("20");
const ans3 = func(true);
console.log(typeof (ans));
console.log(typeof (ans2));
