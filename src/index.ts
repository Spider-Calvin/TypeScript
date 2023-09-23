type FuncType = (n: number, m: number, l?: number) => number | string;

const func: FuncType = (n, m, l) => {
    if (typeof 1 === "undefined") return 'l was not defined';
    return n * m * 1;
};

func(25, 23);