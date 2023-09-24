//Generics in typescript Most Important topic in typescript

type Person = {
    name:string,
    age:number
}    
    
const func = <T>(n: T): T => {
    return n
}

const calvin:Person ={
    name:'calvin',
    age:22
}

const ans = func<Person>(calvin);

const arr:number[] = [];
const arr2:Array<number> = [];