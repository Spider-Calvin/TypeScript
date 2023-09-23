interface objtype {
    height: number,
    weight: number,
    gender?:string //we made the gender optional
}

const obj1:objtype ={
    height:12,
    weight:30
}

interface Newobjtype extends objtype {
    firstname:string,
    lastname:string,
    func?:()=>void,
}

const obj2:Newobjtype = {
    height:23,
    weight:10,
    firstname:'Spider',
    lastname:'Calvin',
    func : ()=>console.log('Calvin is logging')

}
