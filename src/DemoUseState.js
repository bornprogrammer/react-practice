import { useState } from "react";

const DemoUseState = () => {

    const [name, setName] = useState("sandeep");
    return (
        <div>
            <span>this is Demo of use state {name}</span>
            <input type="text" name="full_name" value={name} onChange={(event) => {
                setName((previousState) => {
                    return previousState + event.target.value;
                });
            }} />
        </div>
    )
}

export default DemoUseState;