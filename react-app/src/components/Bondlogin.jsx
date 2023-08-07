import React, {useState } from 'react';
import {handleLoginApi} from '../services/bond-service';
import './Bondlogin.css';
import {useNavigate} from "react-router-dom";


   
function Bondlogin() {
  let data;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [errMsg ,setErrMsg] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);


  const handleOnChangeUserInput = (event) => {
    setUsername(event.target.value);
    setSubmitted(false);
  }

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
    setSubmitted(false);
  }

  const handleOnClick = async() => {
    setErrMsg("");

  try{
      data = await handleLoginApi(username, password);
      console.log("check >>>>" , data.errorCode);
      if (data && data.errCode !== 0){
      setErrMsg(data.message);
      }
      if (data.errorCode == 0){
        console.log(">>>> check if login successfully!")
        navigate({
          pathname: "/HomePage"
        });
      }
    }catch(error){
      if (error.response){
          if (error.response.data){
              this.setState({
                  errMessage: error.response.data.message
              })

          }
      }
    }
}
    

return(
        <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form>
            <label>
            <p>Username</p>
            <input
            type='text'
            placeholder='Enter your username'
            value = {username}
            onChange = {handleOnChangeUserInput}
            />
            </label>
            <label>
            <p>Password</p>
            <input
              type='password'
              placeholder='Enter your password'
              value = {password}
              onChange = {handleOnChangePassword}
            />
            </label>
            <div>
            <button id="submit" type="button" onClick = {handleOnClick}>Submit</button>
            </div>
        </form>
        </div>
    )
}

export default Bondlogin;

