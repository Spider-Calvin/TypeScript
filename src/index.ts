//Generics in typescript Most Important topic in typescript
type person ={
    name: string,
    age: number
}

const usres:person[]=[
    {
        name: 'calvin',
        age: 21
    },
    {
        name: 'spider',
        age: 25
    },
    {
        name: 'praise',
        age: 30
    },
    {
        name: 'Jenny',
        age: 20
    },
]

const fliterpeoples = <T, X extends keyof T>(arr:T[] , property:X, value:T[X]) : T[]=>{
    return arr.filter((item)=>item[property] === value);
}

const fliteredpeoples = fliterpeoples(usres, 'name', 'calvin' );
const fliteredpeoplesbyage = fliterpeoples(usres, 'age', 30 );

console.log(fliteredpeoples);
console.log(fliteredpeoplesbyage);