import { useEffect, useState } from "react";
import MouseMover from "./MouseMover";

const MouseContainer = () => {
    const [isDisplay, showMouseMover] = useState(true);

    return (
        <div>
            <button onClick={() => showMouseMover(!isDisplay)}>Toggle</button>
            {isDisplay && <MouseMover></MouseMover>}
        </div>
    )

};

export default MouseContainer;