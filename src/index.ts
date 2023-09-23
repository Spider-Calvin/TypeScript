const arr:number[] = [12, 24, 36, 48]
const arr2:string[] = ['a', 'b', 'c', 'd', 'e']

//second type
const array:Array<string> = ['a', 'b', 'c', 'd', 'e']
const numarray:Array<number> = [12, 24, 36, 48]

// uninon type
const numstring:Array<string | number> = [1,'calvin']
console.log(numstring);
