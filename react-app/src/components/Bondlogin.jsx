import React, { useState } from "react";
import PropTypes from 'prop-types'; 

async function loginUser(credentials){
    return fetch('https://localhost:8080/login',{
        method: POST,
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function BondLogin({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username, 
            password
        });
        setToken(token);
    }

    return(
        <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

    )
}


Login.PropTypes = {
    setToken: PropTypes.func.isRequired
}