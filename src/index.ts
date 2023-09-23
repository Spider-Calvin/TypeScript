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