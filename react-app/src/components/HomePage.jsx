import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';


/* const fetchData = async () =>{
    try{
        const response = await axios.get('/api/data');
        return response.data;
    }catch (error){
        console.error('Error fetching data: ', error);
        return [];
    }
};

const DataTable = () => {
    const [data, setData] = useState([]);
}

useEffect(() => {
    fetchData().then((featchedData) => setData(featchedData));
},[]); */

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
                            <th>Bond name</th>
                            <th>Issuer</th>
                            <th>Due date</th>
                        </tr>
                    </thread>
                    {/* <tbody>
                        {data.map((item,index) =>(
                            <tr>{index+1}>
                            <td>{item.column1}</td>
                            <td>{item.column2}</td>
                            <td>{item.column3}</td>
                        </tr>

                        ))}
                    </tbody> */}
                    
                </Table>
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