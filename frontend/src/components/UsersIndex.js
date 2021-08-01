import React, { useState, useEffect } from 'react';
import { apiURL } from '../util/apiURL';
import axios from 'axios';

function UsersIndex () {
    const [ users, setUsers ] = useState([]);
    const API = apiURL();

    useEffect(() => {
        const fetchUsers = async () => {
            let res = await axios({
                method: 'get',
                url: `${API}/api/users`
            })
            setUsers(res.data.users);
        }
        fetchUsers();
    }, [])
    return(
        <div>
            <h1>All Users. This page is visible for logged in users</h1>
            <ul>
                {users.map(user => {
                    return <li key={user.id}>{user.email}</li>
                })}
            </ul>
        </div>
    )
}

export default UsersIndex