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
            <Tab eventKey="option1" title="Active bonds">
                Tab content for option 1
            </Tab>
            <Tab eventKey="option2" title="My bonds">
                Tab content for option 1
            </Tab>
            <Tab eventKey="option3" title="Bonds due for maturity">
                A table for bonds due for maturity within the last 5 days. 
                A table for bonds due for maturity within the next 5 days.
            </Tab>
            <Tab eventKey="option4" title="Bonds by ISIN">
                Tab content for option 3
            </Tab>
            <Tab eventKey="option5" title="Bonds by CUSIP">
                Tab content for option 4
            </Tab>
            <Tab eventKey="option6" title="Bonds' issuers and owners">
                Tab content for option 5
            </Tab>
            </Tabs>
        </>
      );
}

export default HomePage