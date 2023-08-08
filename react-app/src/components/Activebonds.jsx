import React, { useState, useEffect } from "react";
import { findActivebonds } from "../services/ActivebondsServices";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


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
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">Bonds Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/my-bonds">My bonds</Nav.Link>
            <Nav.Link as={Link} to="/all-bonds">All bonds</Nav.Link>
            <Nav.Link as={Link} to="/active-bonds">Active bonds</Nav.Link>
            <Nav.Link as={Link} to="/bonds-maturity">Bonds by maturity</Nav.Link>
            

          </Nav>
        </Container>
      </Navbar>
    <div className="container mt-4">
    <div className="table-responsive">
    <table className="table table-bordered">
      <thead className="thread-dark">
        <tr>
          <th>ID</th>
          <th>Issuer</th>
          <th>ISIN</th>
          <th>CUSIP</th>
          <th>Maturity</th>
          <th>Type</th>
          <th>Coupon</th>
          <th>Face value</th>
          <th>Currency</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {activebonds.map((activebond) => (
          <tr key={activebond.id}>
            <td>{activebond.id}</td>
            <td>{activebond.issuer_name}</td>
            <td>{activebond.isin}</td>
            <td>{activebond.cusip}</td>
            <td>{activebond.maturity_date}</td>
            <td>{activebond.type}</td>
            <td>{activebond.coupon}</td>
            <td>{activebond.face_value}</td>
            <td>{activebond.currency}</td>
            <td>{activebond.status}</td>

          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
    </>
  )
};
