import React, { useState, useEffect } from "react";
import { findAllbonds } from "../services/AllbondsServices";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

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
      <tbody >
        {allbonds.map((allbond) => (
          <tr key={allbond.id}>
            <td>{allbond.id}</td>
          
            <td>{allbond.issuer_name}</td>
            <td>{allbond.isin}</td>
            <td>{allbond.cusip}</td>
            <td>{allbond.maturity_date}</td>
            <td>{allbond.type}</td>
            <td>{allbond.coupon}</td>
            <td>{allbond.face_value}</td>
            <td>{allbond.currency}</td>
            <td>{allbond.status}</td>

          </tr>
        ))}
      </tbody>
      </table>
    </div>
  </div>
  </>
  )
};
