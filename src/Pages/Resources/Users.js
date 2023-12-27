import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers, getUserError, getUserStatus, fetchUser } from "../../store/reducers/userSlice";
const Users = () => {

    const dispatch = useDispatch();
    const users = useSelector(getAllUsers);
    const error = useSelector(getUserError);
    const userStatus = useSelector(getUserStatus);

    useEffect(() => {
        if (userStatus === "idle") {
            dispatch(fetchUser());
        }
    }, [userStatus, dispatch]);
    return (
        <div>
            List of Users
            <div>
                {
                    users.map((user) => {
                        return (
                            <div key={user.id}>
                                Name {user.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Users;