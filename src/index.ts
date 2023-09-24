//Generics in typescript Most Important topic in typescript

const func = <CustomType>(n: CustomType): CustomType => {
    const text:CustomType = n;
    return n;
};

const ans = func(20);
const ans2 = func("20");
const ans3 = func(true);

console.log(typeof (ans))
console.log(typeof (ans2))