import React, { useEffect, useState } from 'react';
import { findBookusers } from "../services/bond-service"
import axios from 'axios';



export const DataBookusers = () => {
    const [bookusers, setBookusers] = useState([]);



useEffect(() => {
    findBookusers()
    .then(({data}) => {
        setBookusers(data);
    });
},[]);


return (
    <>
    { bookusers.map(bookuser =>
        <div>
            <div>User Id: {bookuser.user_id}</div>
            <div>Book Id:  {bookuser.book_id}</div>
        </div>)
        }
    </>
    )
};

