import { useState } from "react";


const UnControlledComponent = () => {

    const [fName, setFName] = useState("");

    const [age, setAge] = useState("");

    const onNameChanged = (event) => {
        setFName(event.target.value);
    };

    const onAgeChanged = (event) => {
        setAge(event.target.value);
    };

    const onSubmitted = () => {
        console.log(fName, age);
    }

    return (
        <>
            <input type="text" value={fName} onChange={onNameChanged} placeholder="Name" name="fname" />
            <input type="text" placeholder="Age" value={age} onChange={onAgeChanged} name="age" />

            <input onClick={onSubmitted} type="submit" value="Submit" />
        </>
    )

};

export default UnControlledComponent;