import { useReducer } from "react";
import { act } from "react-dom/test-utils";


const initialState = { value: 0 };

const reducerF = (state, action) => {
    switch (action.type) {
        case "increment":
            return { value: state.value + 1 };
        case "decrement":
            return { value: state.value - 1 };
        case "addBy":
            return { value: state.value + action.byValue };
        case "reset":
            return initialState;
        default:
            break;
    }
};


const DemoUseReducerExample = () => {
    const [state, dispatch] = useReducer(reducerF, initialState);
    return (
        <>
            <span>this is {state.value}</span>
            <button onClick={() => dispatch({ type: "increment" })} >Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })} >Decrement</button>
            <button onClick={() => dispatch({ type: "reset" })} >Reset</button>
            <button onClick={() => dispatch({ type: "addBy", byValue: 10 })} >Add by 10</button>
        </>
    )
}

export default DemoUseReducerExample;