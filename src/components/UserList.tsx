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
    const[search, setSearch]=useState<string>("");

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
    };

    //Error
    if (error) {
        return <h2>{error}</h2>
    };

    const filteredUsers=users.filter((user)=>{
       return user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase())
    });
    return (
        <div>
            <h2>User List</h2>
            <input
             type="text"
             placeholder='Search user...'
             value={search}
             onChange={(e)=>setSearch(e.target.value)}
             />

            {filteredUsers.map((user) => (
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