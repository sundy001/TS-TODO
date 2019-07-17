export type Enum<T extends object> = T[keyof T];
export type Reducer<S, A> = (state: S | undefined, action: A) => S;
