import React from "react";
const Bondlogin = () => {
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
                    <input type="text" name="username" placeholder= "username" required />
                    <br></br>
                    <label><strong>Password:</strong></label>
                    <input type="text" name="password" placeholder= "password" required />
                    <div className="button-container">
                    <input type="submit" />
                    </div>
                </fieldset> </body></>

    )
}


export default Bondlogin;