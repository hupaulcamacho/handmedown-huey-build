import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { apiURL } from '../util/apiURL';
import { signUp } from '../util/firebaseFunctions';

function  SignUp() {
    const [ email, setEmail ] = useState('');
    const [ error, setError ] = useState(null);
    const [ password, setPassword ] = useState('');
    const history = useHistory();

    const API = apiURL;

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            console.log(email);
            console.log(password)
            let res = await signUp(email, password)
            console.log(res)
            await axios.post('http://localhost:3001/api/users', { id: res.user.uid, email})
            // sign up with firebase and send result to backend
            history.push('/')
        } catch (error) {
            setError(error.message)
        }
        
    }

    return(
        <>
            <h1>Sign UP Page</h1>
            {error ? <div>{error}</div> : null}
            <form onSubmit={handleSubmit}>
                <input placeholder='email' 
                value={email} 
                onChange={(e) => setEmail(e.currentTarget.value)}/>

                <input placeholder='password'
                type='password'
                value={password} 
                onChange={(e) => setPassword(e.currentTarget.value)}
                autoComplete='on' />
                <br/>
                <button type='submit'>Sign Up</button>
            </form>
        </>
    )
}

export default SignUp;