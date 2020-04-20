import React from 'react';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Layout from "../utils/Layout";

const HomePage =()=> {
  return (
    <Jumbotron >
      <Card bg='dark'>
        <Card.Body >
          <Card.Title as='h2' style={{textAlign: "center", color:"white"}}>Invoice </Card.Title>
          <Card.Text  style={{textAlign: "center", fontSize:"1.5em",color:"white"}}>
            Create Your custom Invoice
          </Card.Text>
          <Layout/>
        </Card.Body>
      </Card>
    </Jumbotron>

  );
};

export default HomePage;
