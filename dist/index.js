"use strict";
const usres = [
    {
        name: 'calvin',
        age: 21
    },
    {
        name: 'spider',
        age: 25
    },
    {
        name: 'praise',
        age: 30
    },
    {
        name: 'Jenny',
        age: 20
    },
];
const fliterpeoples = (arr, property, value) => {
    return arr.filter((item) => item[property] === value);
};
const fliteredpeoples = fliterpeoples(usres, 'name', 'calvin');
const fliteredpeoplesbyage = fliterpeoples(usres, 'age', 30);
console.log(fliteredpeoples);
console.log(fliteredpeoplesbyage);
