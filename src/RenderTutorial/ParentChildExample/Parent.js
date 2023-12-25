import { useState } from "react";
import Child from "./Child";

const Parent = ({ children, increment1 }) => {
    const [cnt, setCnt] = useState(0);
    console.log("rendering parent component");

    const increment = () => {
        setCnt(cnt + 1);
    };

    const reset = () => {
        setCnt(0);
    };

    const cntTo5 = () => {
        setCnt(5);
    };

    return (
        <>
            <div>{increment1}</div>
            <div>{cnt}</div>
            {children}
            <div>
                <button onClick={increment}>Increment</button>
            </div>
            <div>
                <button onClick={reset} >Reset</button>
            </div>
            <div>
                <button onClick={cntTo5}>Count to 5</button>
            </div>
        </>
    )

};
export default Parent;