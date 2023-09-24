//Generics in typescript Most Important topic in typescript

type Person = {
    name:string,
    age:number
}    
    
const func = <T, U>(n:T,o: U):{ n:T, o:U} => {
    return { n, o }
}
    
const ans = func<number, string>(20,"Lol");
