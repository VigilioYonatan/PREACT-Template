import { useContext } from "preact/hooks";
import { TodoContext } from "../todoContext";

function TodoList() {
    const { state, methods } = useContext(TodoContext);

    return (
        <>
            <h1 class="text-2xl font-bold text-white mb-4">Todo List</h1>
            <div className="flex gap-2 items-center text-white">
                <button
                    onClick={methods.onIncrement}
                    className="text-white bg-green-600 px-2"
                >
                    +
                </button>
                {state.value}
                <button
                    onClick={methods.onDecrement}
                    className="text-white bg-red-600 px-2"
                >
                    -
                </button>
            </div>
        </>
    );
}

export default TodoList;
