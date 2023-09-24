//DOM manipulation Type Assertions

/*
    Type Assertions meaning is "BAAP KO MATH SIKA CHALL"
*/

interface obj {
    [key: string]:string;  //index signature 
}

const myobject: obj = {
    name: 'spider',
    email: 'spider@gmail.com'
}

const getName = (): string => {
    return myobject.name;
};

const getEmail = (): string => {
    return myobject.email;
};

const getData = (key:string): string => {
    return myobject[key];
};

console.log(getData('name'));
