//Generics in typescript Most Important topic in typescript

type Person ={
    name: string,
    age:number
}

type Person2 ={
    name: string,
    age:number,
    email:string
}

const user:Person = {
    name:'calvin',
    age:21
}

const user2:Person2 = {
    name:'spider',
    age:21,
    email:'calvin@gmail.com'
}

    
const funcx = <X, Y extends X>(n:X,o: Y):{ n:X, o:Y} => {
    return { n, o }
}
//Extends just extends the type and takes a copy of the original
    
const ansX = funcx<Person, Person2>(user, user2);//should pass the object 

console.log(ansX)