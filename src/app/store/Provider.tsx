import { JSX } from "preact/jsx-runtime";
import TodoProvider from "./todo/todoContext";

type ProviderProps = { children: JSX.Element | JSX.Element[] };
function Provider({ children }: ProviderProps) {
    return <TodoProvider>{children}</TodoProvider>;
}

export default Provider;
