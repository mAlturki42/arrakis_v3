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
            <div>id: {activebond.issuer_name}</div>
            <div>ISIN: {activebond.isin}</div>
            <div>CUSIP: {activebond.cusip}</div>
            <div>Issuer: {activebond.issuer_name}</div>
            <div>Maturity date: {activebond.maturity_date}</div>
            <div>Type: {activebond.type}</div>
            <div>Coupon: {activebond.coupon}</div>
            <div>Face value: {activebond.face_value}</div>
            <div>Currency: {activebond.currency}</div>
            <div>Status: {activebond.status}</div>



        </div>) 
        }
    </>
  )
};
