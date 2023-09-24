//classes in typescript

class player {
    private height = 34;
    weight = 50;

    constructor(height: number, weight: number){
        this.height = height;
        this.weight = weight;
    }

    myheight=()=> {
       return this.height
    }

}

const abhi = new player(100, 150);

console.log( abhi.myheight())

// protected keyboard