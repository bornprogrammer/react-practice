import React from "react";

const Child = ({ cnt }) => {
    return (
        <>
            This is child component {cnt}
        </>
    )
};
export default React.memo(Child);