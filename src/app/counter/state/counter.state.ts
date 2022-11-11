export interface CounterState {
    counter: number;
    name: string;
}

export const initialState: CounterState = {
    counter: 0,
    name: 'Counter App'
}