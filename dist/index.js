"use strict";
//DOM manipulation Type Assertions
/*
    Type Assertions meaning is "BAAP KO MATH SIKA CHALL"
*/
const form = document.getElementById('form');
const myinput = document.querySelector("form > input");
form.onsubmit = (e) => {
    e.preventDefault();
    console.log(myinput.value);
};
