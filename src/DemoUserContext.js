import React from "react";
import DemoUserContext1 from "./DemoUserContext1";
import DemoUserContext3 from "./DemoUserContext3";

export const DemoContextIns = React.createContext();

const DemoUserContext = () => {

    return (
        <>
            <DemoContextIns.Provider value={"sandeep"}>
                <DemoUserContext1>

                </DemoUserContext1>
                <DemoUserContext3>

                </DemoUserContext3>
            </DemoContextIns.Provider>
        </>
    )

}

export default DemoUserContext;