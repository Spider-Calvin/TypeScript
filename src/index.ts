//DOM manipulation Type Assertions

/*
    Type Assertions meaning is "BAAP KO MATH SIKA CHALL"
*/

// const btn = document.getElementById("btn")!;
// const btn = document.getElementById("btn") as HTMLElement;
const btn = <HTMLElement>document.getElementById("btn");

const img = <HTMLImageElement>document.getElementById("img");

btn.onclick
img.src
