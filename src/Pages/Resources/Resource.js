import { Link, Outlet } from 'react-router-dom';

const Resource = () => {

    return (
        <div>
            List of Resources
            <div className='tab-view'>
                <div>
                    <Link to=".">Posts</Link>
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
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
};

export default Resource;