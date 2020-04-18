import React from 'react';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';

const HomePage =()=> {
  return (
    <Jumbotron>
      <Card>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>

        </Card.Body>
      </Card>
    </Jumbotron>

  );
};

export default HomePage;
