import { useEffect, useState } from "react";

const DemoUseEffectWithInCorrectDependency = () => {
    const [seconds, setSecond] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSecond((prevSecond) => prevSecond + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);
    return (
        <>
            <span>Timer {seconds}</span>
        </>
    )
};

export default DemoUseEffectWithInCorrectDependency;