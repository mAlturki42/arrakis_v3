import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';




const HomePage = () => {
    return (
        <>
        <Navbar className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">Bonds Tracker</Navbar.Brand>
            <Navbar.Toggle />
            <Nav variant="tabs" defaultActiveKey="/home">
        </Nav>
        </Container>
        </Navbar>

        <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
            >
            <Tab eventKey="option1" title="option 1">
                Tab content for option 1
            </Tab>
            <Tab eventKey="option2" title="option 2">
                Tab content for option 2
            </Tab>
            <Tab eventKey="option3" title="option 3">
                Tab content for option 3
            </Tab>
            <Tab eventKey="option4" title="option 4">
                Tab content for option 4
            </Tab>
            <Tab eventKey="option5" title="option 5">
                Tab content for option 5
            </Tab>
            </Tabs>
        </>
      );
}

export default HomePage