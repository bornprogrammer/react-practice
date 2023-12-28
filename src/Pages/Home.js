import { decrementX, decrementY, decrementZ, incrementX, incrementY, incrementZ, selectSum, selectX, selectY, selectZ } from ".././store/reducers/createSelectorDemoSlice";
import { useDispatch, useSelector } from "react-redux";
import HomeChild from "./HomeChild";

const Home = () => {
    const x = useSelector(selectX);
    const y = useSelector(selectY);
    const z = useSelector(selectZ);
    const sum = useSelector(selectSum);
    const dispatch = useDispatch();

    return (
        <div>
            <div>Incremented values x = {x} y = {y} z = {z}</div>

            <div>
                <button onClick={() => dispatch(incrementX())}>X+1</button>

                <button onClick={() => dispatch(incrementY())}>Y+1</button>

                <button onClick={() => dispatch(incrementZ())}>Z+1</button>
            </div>

            <div>
                <button onClick={() => dispatch(decrementX())}>X-1</button>

                <button onClick={() => dispatch(decrementY())}>Y-1</button>

                <button onClick={() => dispatch(decrementZ())}>Z-1</button>
            </div>

            <div>Sum {sum}</div>

            <div>Product {x * y * z}</div>

            <div>Total sum {1000 + (x * y * z) + (x + y + z)}</div>
        </div>
    )
};

export default Home;