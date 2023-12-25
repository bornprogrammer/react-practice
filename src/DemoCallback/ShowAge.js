import React from "react";

const ShowAge = ({ age }) => {
    return (
        <div>
            My age is {age};
        </div>
    )
};

export default React.memo(ShowAge);