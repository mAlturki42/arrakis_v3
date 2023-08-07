import React, { useState, useEffect } from "react";
import { findBondsmaturity } from "../services/BondsmaturityServices";

export const Bondsmaturity = () => {
    const [bondsmaturity, setBondmaturity] = useState([]);

    useEffect(() => {
        findBondsmaturity()
            .then(({data}) => {
            setBondsmaturity(data);
            });
    }, []);
  return (
    <>
        { bondsmaturity.map(bond => 
        <div >
            <div>Issuer name: {bond.issuer_name}</div>
            <div>ID: {bond.id} </div>
        </div>) 
        }
    </>
  )
};
