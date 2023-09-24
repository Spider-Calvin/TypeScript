//classes in typescript

class player {
    public readonly id:string
    constructor( private height: number, public weight: number, protected age: number ) {
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.id = String(Math.random()*100)
    }

    myheight=()=> {
       return this.height
    }

    get getHeight ():number{
        return this.height
    }

    set setHeight (value:number){
        this.height = value
    }


}

const abhi = new player(100, 150, 20);

console.log('Height', abhi.getHeight);
abhi.setHeight = 500;
console.log('setted Height', abhi.getHeight);

