import { createContext, JSX } from "preact";
import { useReducer } from "preact/hooks";
import TodoReducer from "./todoReducer";

type TodoContextProps = {
    state: TodoState;
    methods: {
        onIncrement(): void;
        onDecrement(): void;
    };
};
export const TodoContext = createContext({} as TodoContextProps);

export interface TodoState {
    value: number;
}
const todoState: TodoState = {
    value: 0,
};

type TodoProviderProps = { children: JSX.Element | JSX.Element[] };
function TodoProvider({ children }: TodoProviderProps) {
    const [state, dispatch] = useReducer(TodoReducer, todoState);

    function onIncrement() {
        dispatch({ type: "[TODO]-Increment" });
    }
    function onDecrement() {
        dispatch({ type: "[TODO]-Decrement" });
    }
    return (
        <TodoContext.Provider
            value={{ state, methods: { onIncrement, onDecrement } }}
        >
            {children}
        </TodoContext.Provider>
    );
}
export default TodoProvider;
