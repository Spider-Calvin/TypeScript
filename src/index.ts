//classes in typescript

class player {

    constructor( private height: number, public weight: number, protected age: number ) {
        this.height = height;
        this.weight = weight;
        this.age = age;
    }

    myheight=()=> {
       return this.height
    }

}

const abhi = new player(100, 150, 20);

console.log( abhi.myheight());
console.log(abhi.weight);

// protected keyboard can only b extended in subclass

class ProPlayer extends player{
    constructor( height: number,  weight: number,  age: number , private special: number){
        super(height, weight, age);
        this.special =  special;
    }

    getheight = ()=> this.age;
}


const spider = new ProPlayer(100, 150, 20, 10);
console.log(spider.getheight());