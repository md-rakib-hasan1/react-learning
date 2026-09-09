import { useState, useEffect } from 'react';
interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const [error, setError] = useState<string>("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    //Loading
    if (loading) {
        return <h2>Loading...</h2>;
    }

    //Error
    if (error) {
        return <h2>{error}</h2>
    }
    return (
        <div>
            <h2>User List</h2>

            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <hr />
                </div>
            ))}

        </div>
    );
};

export default UserList;