import { useEffect, useState } from "react";

const DemoUseState1 = () => {

    const [name, setName] = useState("sandeep");

    const [age, setAge] = useState(10);

    const [email, setEmail] = useState("");

    useEffect(() => {
        console.log("runnig use effect" + name);
    }, [age, email]);

    return (
        <div>
            <span>this is Demo of use state {name}</span>
            <input type="text" name="full_name" value={name} onChange={(event) => {
                setName(event.target.value);
            }} />

            <input type="number" name="age" value={age} onChange={(event) => {
                setAge(event.target.value);
            }} />

            <input type="text" name="email" value={email} onChange={(event) => {
                setEmail(event.target.value);
            }} />
        </div>
    )
}

export default DemoUseState1;