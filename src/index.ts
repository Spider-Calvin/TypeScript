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

const getName = (): string => {
    return myobject.name;
};

const getEmail = (): string => {
    return myobject.email;
};

const getData = (key:"name" | "email"): string => {
    return myobject[key];
};

// index signature 