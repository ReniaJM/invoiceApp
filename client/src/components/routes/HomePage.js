import React from 'react';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Layout from "../utils/Layout";

const HomePage =()=> {
  return (
    <Jumbotron >
      <Card>
        <Card.Body>
          <Card.Title>Your Invoice </Card.Title>
          <Card.Text>
            Create Your custom Invoice!
          </Card.Text>
          <Layout/>
        </Card.Body>
      </Card>
    </Jumbotron>

  );
};

export default HomePage;
