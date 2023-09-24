//DOM manipulation Type Assertions

/*
    Type Assertions meaning is "BAAP KO MATH SIKA CHALL"
*/

const form  = document.getElementById('form') as HTMLFormElement;
const myinput = document.querySelector("form > input") as HTMLInputElement;

form.onsubmit=(e:SubmitEvent) => {
    e.preventDefault();
    console.log(myinput.value);
}


