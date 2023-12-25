import { useCallback, useState } from "react";
import Title from "./Title";
import ShowAge from "./ShowAge";
import Button from "./Button";
import ShowSalary from "./ShowSalary";

const DemoUseCallbackParent = () => {
    const [age, setAge] = useState(20);

    const [salary, setSalary] = useState(20000);

    const increaseAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    const incrementSalary = useCallback(() => {
        setSalary(salary + 5000);
    }, [salary]);

    return (
        <>
            <Title></Title>
            <ShowAge age={age} ></ShowAge>
            <Button label="Increment Age" callback={increaseAge} ></Button>
            <ShowSalary salary={salary}></ShowSalary>
            <Button label="Increment Salary" callback={incrementSalary} ></Button>
        </>
    )

};

export default DemoUseCallbackParent;
