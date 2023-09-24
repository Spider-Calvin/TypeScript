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


// Exclude<Type, ExcludedUnion>
type MyUnion = string | number | boolean
type Random = Exclude<MyUnion, boolean>


// Extract<Type, Union>

// NonNullable<Type>
