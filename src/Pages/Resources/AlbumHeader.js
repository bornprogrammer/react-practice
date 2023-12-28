import { useDispatch, useSelector } from "react-redux";
import { selectListMetaData, setSearch } from "../../store/reducers/listMetaDataSlice";

const AlbumHeader = () => {
    const { search } = useSelector(selectListMetaData);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <input type="text" value={search} name="search" onChange={(e) => dispatch(setSearch(e.target.value))} />
            </div>
        </>
    )
};

export default AlbumHeader;