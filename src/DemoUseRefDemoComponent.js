import { useEffect, useRef } from "react";


const InputComponent = (props) => {
    const usingRef = useRef();
    useEffect(() => {
        props.setRef(usingRef);
    }, []);

    return (
        <input ref={usingRef} type={props.type} name={props.nam} placeholder={props.placeholder} ></input>
    )
}

const DemoUseRefDemoComponent = () => {
    let nameRef = null;

    const handleSubmit = () => {
        const name = nameRef.current.value;
        // const age = ageRef.current.value;
        console.log(name);
    }

    return (
        <>
            <InputComponent type="text" setRef={(ref) => {
                nameRef = ref;
            }} name="full_name" placeholder="Please enter your full name" ></InputComponent>
            {/* <InputComponent type="number" name="age" placeholder="Please enter age" ></InputComponent> */}

            <input type="submit" onClick={handleSubmit} value="Submit" />
        </>
    )


};

export default DemoUseRefDemoComponent;