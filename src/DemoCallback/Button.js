import React from "react";

const Button = ({ callback, label }) => {
    console.log("rendering button for " + label);
    return (
        <div>
            <button onClick={callback} >{label}</button>
        </div>
    )
};

export default React.memo(Button);