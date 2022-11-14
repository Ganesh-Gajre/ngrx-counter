export interface CounterState {
    counter: number;
    name: string;
}

export const initialState: CounterState = {
    counter: 4,
    name: 'Counter App'
}