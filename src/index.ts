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

// Record<Keys, Type>
interface UserInfo {
  age: number;
}

type UserName = "john" | "levi" | "elon" | "jack";

const users: Record<UserName, UserInfo> ={
  john: { age: 34 },
  levi: { age: 34 },
  elon: { age: 34 },
  jack: { age: 34 },
};
