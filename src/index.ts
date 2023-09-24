//classes in typescript
interface ProductType {
    name: string;
    price: number;
    stock: number;
    id: string;
    offer?: boolean;
}
class Product implements ProductType{
    public id: string = String(Math.random () * 1000);
    private lol: boolean = false;

    constructor (
        public name: string,
        public price: number,
        public stock: number
    ) {}
}

const spider =  new Product('calvin', 10, 20)
