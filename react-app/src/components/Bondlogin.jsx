/* import React, { useState } from "react";
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
        <><head>
            <title>Bond Challenge Login</title>
        </head><body>
                <fieldset> <div class="title">
                    <h1><center>Bond Tracking</center></h1>
                    <p><strong><center>Bond Investigtion Tool- User Login</center></strong></p>
                </div>
                    <br></br>
                    <label><strong>UserName:</strong></label>
                    <input type="text" name="username" placeholder= "username" required onChange={e => setUserName(e.target.value)}/>
                    <br></br>
                    <label><strong>Password:</strong></label>
                    <input type="text" name="password" placeholder= "password" required onChange={e => setPassword(e.target.value)}/>
                    <div className="button-container">
                    <input type="submit" />
                    </div>
                </fieldset> </body></>

    )
}


Login.PropTypes = {
    setToken: PropTypes.func.isRequired
} */