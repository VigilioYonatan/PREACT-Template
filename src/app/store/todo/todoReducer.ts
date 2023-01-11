import Produce from "immer";
import { TodoState } from "./todoContext";

type TodoProviderAction =
    | { type: "[TODO]-Increment" }
    | { type: "[TODO]-Decrement" };
    
function TodoReducer(state: TodoState, action: TodoProviderAction): TodoState {
    switch (action.type) {
        case "[TODO]-Increment":
            return Produce(state, (draft) => {
                draft.value += 1;
            });
        case "[TODO]-Decrement":
            return Produce(state, (draft) => {
                draft.value -= 1;
            });
        default:
            return state;
    }
}

export default TodoReducer;
