import React, { useEffect, useState } from 'react';
import { findBookusers } from "../services/bond-service"
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import { DataBookusers } from './Bookusers';

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
                <Table striped border hover>
                    <thread>
                        <tr>
                            <th></th>
                            <th>Bond status</th>
                            <th>Bond type</th>
                            <th>Bond currency</th>
                            <th>Bond holder</th>
                            <th>Bond maturity date</th>
                        </tr>
                    </thread>
                    
                </Table>
            </Tab>
            <Tab eventKey="option2" title="My bonds">
            <Table striped border hover>
                    <thread>
                        <tr>
                            <th></th>
                            <th>Bond status</th>
                            <th>Bond type</th>
                            <th>Bond currency</th>
                            <th>Bond holder</th>
                            <th>Bond maturity date</th>
                        </tr>
                    </thread> 
                    
                </Table>
            </Tab>
            <Tab eventKey="option3" title="Bonds due for maturity">
                <DataBookusers tab="option0" />
            <Table striped border hover>
                    <thread>
                        <tr>
                            <th></th>
                            <th>Bond status</th>
                            <th>Bond type</th>
                            <th>Bond currency</th>
                            <th>Bond holder</th>
                            <th>Bond maturity date</th>
                        </tr>
                    </thread>
                    
                </Table>
                <Table striped border hover>
                    <thread>
                        <tr>
                            <th></th>
                            <th>Bond status</th>
                            <th>Bond type</th>
                            <th>Bond currency</th>
                            <th>Bond holder</th>
                            <th>Bond maturity date</th>
                        </tr>
                    </thread>
                </Table>
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