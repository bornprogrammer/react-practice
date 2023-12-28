import { incrementX, incrementY, incrementZ, incrementZ1, selectX, selectY, selectZ, selectZ1 } from "../store/reducers/createSelectorDemoSlice";
import { useDispatch, useSelector } from "react-redux";

const HomeChild = () => {
    const z1 = useSelector(selectZ1);
    const dispatch = useDispatch();

    return (
        <div>

            <button onClick={() => dispatch(incrementZ1())}>Z1+1</button>
            <div>Incremented values z = {z1}</div>
        </div>
    )
};

export default HomeChild;