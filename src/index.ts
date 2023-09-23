type FuncType = (n: number, m: number, l?: number) => number;

const func: FuncType = (n, m, l) => {
    if (typeof 1 === "undefined") return n*m;
    return n * m * 1;
};

func(25, 23);