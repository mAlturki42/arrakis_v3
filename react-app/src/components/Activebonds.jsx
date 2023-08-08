import React, { useState, useEffect } from "react";
import { findActivebonds } from "../services/ActivebondsServices";

export const Activebonds = () => {
    const [activebonds, setActivebonds] = useState([]);

    useEffect(() => {
        findActivebonds()
            .then(({data}) => {
            setActivebonds(data);
            });
    }, []);
  return (
    <>
        { activebonds.map(activebond => 
        <div >
            <div>Issuer name: {activebond.issuer_name}</div>
        </div>) 
        }
    </>
  )
};
