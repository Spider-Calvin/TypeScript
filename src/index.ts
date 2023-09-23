type product = {
    name: string;
    stock: number;
    price: number;
    photo: string;
    readonly id : string;
}

type GetDataType = (product :product) => void;

const getData: GetDataType = (product) => {
    console.log(product);
};
    
const productOne: product = { 
    name: "Macbook",
    stock: 46,
    price: 999999,
    photo: "samplephotourl",
    id: "asdnasjdasjkdas",
};

getData(productOne);

//Never Type
const err = new Error()

const errorhandler = ()=>{
    throw new Error(); // on throw returns never type
}

const errorhandler1 = ()=>{
    return new Error(); // on return error the type is error
}