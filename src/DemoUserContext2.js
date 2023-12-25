import { useContext } from "react";
import { DemoContextIns } from "./DemoUserContext";


const DemoUserContext2 = () => {
    const context = useContext(DemoContextIns)

    return (
        <>
            <span>This is demo user context {context}</span>
        </>
    )

}

export default DemoUserContext2;