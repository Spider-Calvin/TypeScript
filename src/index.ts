//Generics in typescript Most Important topic in typescript

type Person = {
    name:string,
    age:number
}    
    
const func = <T, U>(n:T,o: U):{ n:T, o:U} => {
    return { n, o }
}
    
const ans = func<number, string>(20,"Lol");

    
const funcx = <X, Y extends X>(n:X,o: Y):{ n:X, o:Y} => {
    return { n, o }
}
//Extends just extends the type and takes a copy of the original
    
const ansX = func<number, number>(20,30);