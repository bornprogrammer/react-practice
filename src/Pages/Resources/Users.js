import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    // useParams

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then((data) => {
            setUsers(data);
        });
    }, []);
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