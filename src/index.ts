type GetDataType = (product:{
    name: string;
    stock: number;
    price: number;
    photo: string;
}) => void;

const getData: GetDataType = (product) => {
    console.log(product);
};
    