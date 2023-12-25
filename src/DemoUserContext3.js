import { useContext } from "react";
import { DemoContextIns } from "./DemoUserContext";


const DemoUserContext3 = () => {
    const context = useContext(DemoContextIns);
    return (
        <>
            <span>This is demo user context {context}</span>
        </>
    )
}

export default DemoUserContext3;