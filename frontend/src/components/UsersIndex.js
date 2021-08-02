import React, { useState, useEffect, useContext } from 'react';
import { apiURL } from '../util/apiURL';
import { AuthContext }from '../providers/AuthContext';
import axios from 'axios';

function UsersIndex () {
    const [ users, setUsers ] = useState([]);
    const API = apiURL();
    const { token } = useContext(AuthContext);

    useEffect(() => {
        const fetchUsers = async () => {
            let res = await axios({
                method: 'get',
                url: `${API}/api/users`,
                headers: {
                    'AuthToken': token
                }
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