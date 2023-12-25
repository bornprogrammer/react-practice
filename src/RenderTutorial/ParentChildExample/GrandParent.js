import { useState } from "react";
import Child from "./Child";
import Parent from "./Parent";

const GrandParent = () => {
    const [cnt, setCnt] = useState(0);
    console.log("rendering grand component");

    const increment = () => {
        setCnt(cnt + 1);
    };

    return (
        <>
            <div>
                <button onClick={increment} >Increment for grand parent</button>
            </div>
            <Parent increment1={cnt}>
                <Child></Child>
            </Parent>
        </>
    )

};
export default GrandParent;