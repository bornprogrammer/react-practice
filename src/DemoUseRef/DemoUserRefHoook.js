import { useCallback, useEffect, useRef, useState } from "react";

const DemoUserRefHoook = () => {

    const [counter, setCounter] = useState({ cnt: 0 });
    
    const changeCounter = () => {
        setCounter((previousState) => {
            return { cnt: previousState.cnt + 1 };
        });
    }

    const changeTo5 = useCallback(() => {
        setCounter(5);
    }, [counter]);

    const reset = () => {
        setCounter(0);
    }

    return (
        <>
            <span>{counter.cnt}</span>
            <button onClick={changeCounter}>Click</button>
            <button onClick={changeTo5}>Click to 5</button>
            <button onClick={reset}>Reset</button>
        </>
    )
};

export default DemoUserRefHoook;