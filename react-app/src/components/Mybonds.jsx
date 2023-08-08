import React, { useState, useEffect } from "react";
import { findMybonds} from "../services/MybondsServices";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export const Mybonds = () => {
    const [mybonds, setMybonds] = useState([]);

    useEffect(() => {
        findMybonds()
            .then(({data}) => {
            setMybonds(data);
            });
    }, []);
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Bonds Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">My bonds</Nav.Link>
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
      {/* <tbody >
        {mybonds.map((bond) => (
          <tr key={bond.id}>
            <td>{bond.issuer_name}</td>
            <td>{bond.isin}</td>
            <td>{bond.cusip}</td>
            <td>{bond.maturity_date}</td>
            <td>{bond.type}</td>
            <td>{bond.coupon}</td>
            <td>{bond.face_value}</td>
            <td>{bond.currency}</td>
            <td>{bond.status}</td>

          </tr>
        ))}
        </tbody> */}
      </table>
    </div>
  </div>
  </>
  )
};
