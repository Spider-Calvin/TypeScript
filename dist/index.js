"use strict";
//Utility CLASS in typeScript
// Partial<Type>
// Required<Type>
// Readonly<Type>
// Record<Keys, Type>
// Pick<Type, Keys>
// Omit<Type, Keys>
// Exclude<Type, ExcludedUnion>
// Extract<Type, Union>
// NonNullable<Type>
// Parameters<Type>
// Constructor Parameters<Type>
// ReturnType<Type>
// InstanceType<Type>
// Parameters<Type>
const myfunc = (a, b) => {
    console.log(a + b);
};
// Constructor Parameters<Type>
class SampleClass {
    constructor(S, t) {
        this.S = S;
        this.t = t;
    }
}
// ReturnType<Type>
const myfunc2 = (a, b) => {
    return a + b;
};
// InstanceType<Type>
class SampleClass2 {
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
const user = {
    s: 'spider',
    t: 'calvin'
};
