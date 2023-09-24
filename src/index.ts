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
const myfunc = (a: number, b: string) =>{
   console. log(a + b);
};

type Random = Parameters<typeof myfunc> //retuns the parameters as array


// Constructor Parameters<Type>

class SampleClass{ 
   constructor (public S: string, public t: string){}
}

type Random1 = ConstructorParameters<typeof SampleClass>


// ReturnType<Type>

// InstanceType<Type>
