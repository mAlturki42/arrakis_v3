import React, { useState, useEffect } from "react";
import { findAllbonds } from "../services/AllbondsServices";

export const Allbonds = () => {
    const [allbonds, setAllbonds] = useState([]);

    useEffect(() => {
        findAllbonds()
            .then(({data}) => {
            setAllbonds(data);
            });
    }, []);
  return (
    <>
        { allbonds.map(allbond => 
        <div >
            <div>Issuer name: {allbond.issuer_name}</div>
        </div>) 
        }
    </>
  )
};
