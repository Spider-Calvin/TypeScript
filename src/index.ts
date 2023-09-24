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

// Pick<Type, Keys>
interface OrderInfo {
   readonly id: string;
   user: string;
   city: string;
   state: string;
   country: string;
   status: string;
} 
type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;

// Omit<Type, Keys>
interface ShippingInfo2 {
  city: string;
  state: string;
  country: string;
}
type Random = Omit<ShippingInfo2,"country">;
