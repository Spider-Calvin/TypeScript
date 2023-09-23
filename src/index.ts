// Rest Operator
type FuncType = (...m: number[]) => number[];

const func:FuncType = (...m) => {
    return m;
};

func(25, 23, 34, 6, 67, 8, 9);