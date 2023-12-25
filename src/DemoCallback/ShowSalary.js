import React from "react";

const ShowSalary = ({ salary }) => {
    console.log("rendering salary");
    return (
        <div>
            My Salary is {salary};
        </div>
    )
};

export default React.memo(ShowSalary);