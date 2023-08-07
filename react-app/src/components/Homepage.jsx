import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Bookusers } from './Bookuser';

function Homepage() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Bonds Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">My bonds</Nav.Link>
            <Nav.Link href="#all">All bonds</Nav.Link>
            <Nav.Link href="#features">Active bonds</Nav.Link>
            <Nav.Link href="/Bookusers">Bonds by maturity</Nav.Link>
            

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Homepage;