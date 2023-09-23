type FuncType = (n: number, m: number, l?: number) => number | string;

const func: FuncType = (n, m, l=10) => {
    return n * m * 1;
};

func(25, 23);