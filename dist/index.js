"use strict";
const getData = (product) => {
    console.log(product);
};
const productOne = {
    name: "Macbook",
    stock: 46,
    price: 999999,
    photo: "samplephotourl",
    id: "asdnasjdasjkdas",
};
getData(productOne);
//Never Type
const err = new Error();
const errorhandler = () => {
    throw new Error(); // on throw returns never type
};
const errorhandler1 = () => {
    return new Error(); // on return error the type is error
};
