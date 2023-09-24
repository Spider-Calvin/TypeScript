"use strict";
//Generics in typescript Most Important topic in typescript
const func = (n, o) => {
    return { n, o };
};
const ans = func(20, "Lol");
const funcx = (n, o) => {
    return { n, o };
};
//Extends just extends the type and takes a copy of the original
const ansX = func(20, 30);
