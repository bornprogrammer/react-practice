import { Suspense } from "react";

const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={<h1>Loading here</h1>}>
            <Component {...props} />
        </Suspense>
    )
};

export default Loadable;