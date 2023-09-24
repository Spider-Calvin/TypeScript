"use strict";
//DOM manipulation Type Assertions
const myobject = {
    name: 'spider',
    email: 'spider@gmail.com'
};
const getName = () => {
    return myobject.name;
};
const getEmail = () => {
    return myobject.email;
};
const getData = (key) => {
    return myobject[key];
};
// index signature 
