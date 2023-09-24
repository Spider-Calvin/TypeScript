"use strict";
//Generics in typescript Most Important topic in typescript
const user = {
    name: 'calvin',
    age: 21
};
const user2 = {
    name: 'spider',
    age: 21,
    email: 'calvin@gmail.com'
};
const funcx = (n, o) => {
    return { n, o };
};
//Extends just extends the type and takes a copy of the original
const ansX = funcx(user, user2); //should pass the object 
console.log(ansX);
