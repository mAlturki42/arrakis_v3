// import http from "./axios-common";
import axios from './axios-common';

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', {email: userEmail, password: userPassword}) ;
}

export {handleLoginApi};
