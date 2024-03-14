import React, { useState, useEffect } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=5')
            .then(response => response.json())
            .then(data => setUsers(data.results))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="container">
            <h1>Random Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name.first}</td>
                            <td>{user.location.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
