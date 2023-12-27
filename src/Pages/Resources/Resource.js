import { Link, Outlet } from 'react-router-dom';
import { postSlice } from "../../store/reducers/postSlice";
import { useSelector, useDispatch } from "react-redux";

const Resource = () => {
    return (
        <div>
            <div>
                List of Resources
                {/* <button onClick={() => dispatch(postSlice.actions.increaseCount())}>Increase</button> */}
                <div className='tab-view'>
                    <div>
                        <Link to="posts">Posts</Link>
                    </div>
                    <div>
                        <Link to="albums">Albums</Link>
                    </div>
                    <div>
                        <Link to="photos">Photos</Link>
                    </div>
                    <div>
                        <Link to="users">Users</Link>
                    </div>
                    <div>
                        <Link to="comments">Comments</Link>
                    </div>
                </div>
            </div>
            <div style={{ float: "clear" }}>
                <Outlet></Outlet>
            </div>
        </div>
    )
};

export default Resource;