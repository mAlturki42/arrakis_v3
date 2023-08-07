import React, { useState, useEffect } from "react";
import { findBookusers } from "../services/BookuserServices";

export const Bookusers = () => {
    const [bookusers, setBookusers] = useState([]);

    useEffect(() => {
        findBookusers()
            .then(({data}) => {
            setBookusers(data);
            });
    }, []);
  return (
    <>
        { bookusers.map(bookuser => 
        <div >
            <div>Issuer name: {bookuser.issuer_name}</div>
            <div>ID: {bookuser.id} </div>
        </div>) 
        }
    </>
  )
};
