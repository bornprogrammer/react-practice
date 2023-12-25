import React from "react";

const Title = () => {
    console.log("rendering title");
    return (
        <div>
            This is title for callback demo
        </div>
    )
};

export default React.memo(Title);