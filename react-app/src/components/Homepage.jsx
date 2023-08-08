import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Homepage() {
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

      <div className='container mt-4'>
        <h1>Welcome to Bonds Tracker!</h1>
      </div>
    </>
  );
}

export default Homepage;