//DOM manipulation Type Assertions

/*
    Type Assertions meaning is "BAAP KO MATH SIKA CHALL"
*/

interface obj {
    name: string;
    email: string;
}

const myobject: obj = {
    name: 'spider',
    email: 'spider@gmail.com'
}

let key="name";
myobject[key as keyof obj]


// index signature 