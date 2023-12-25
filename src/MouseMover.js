import { useEffect, useState } from "react";

const MouseMover = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const onMouseMoved = (e) => {
        console.log("mouse is moving");
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMoved);
        return removeListener;
    }, []);

    const removeListener = () => {
        window.removeEventListener("mousemove",onMouseMoved);
    }
    return (
        <div>
            x {x}
            y {y}
        </div>
    )

};

export default MouseMover;