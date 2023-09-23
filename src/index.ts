type userName = string | number;

let a:userName = 23;
console.log(a);

const func = (n:number,m:string) :number =>{
 console.log(n,m);
 return n;
}

func(2,'calvin');