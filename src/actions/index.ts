export const CounterActionType = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
} as const;

export const LoginActionType = {
  LOGIN: 'LOGIN',
} as const;

// actions
export const increment = (number: number = 1) => {
  return { type: CounterActionType.INCREMENT, payload: number };
};

export const decrement = () => {
  return { type: CounterActionType.DECREMENT };
};

export const login = () => {
  return { type: LoginActionType.LOGIN };
};

export type CounterActions = ReturnType<typeof increment | typeof decrement>;
export type IsLoginActions = ReturnType<typeof login>;
