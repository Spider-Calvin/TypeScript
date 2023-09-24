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

// Required<Type>
type user = {
    name?: string,
    email?: string,
}

type user1 = {
    name?: string,
    email?: string,
}

type user2 = Required<user>

const user3:Required<user> ={
    name:'spider',
    email:'spider@example.com',
}