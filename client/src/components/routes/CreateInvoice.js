import React from 'react';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Layout from '../utils/Layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListingButton from '../utils/ListingButton';
import HomePageBackButton from '../utils/HomePageBackButton';


const CreateInvoice =()=> {
  return (
    <Jumbotron >
      <Card bg='dark'>
        <Card.Body >
          <Card.Title as='h2' style={{textAlign: "center", color:"white"}}>Invoice </Card.Title>
          <Card.Text  style={{textAlign: "center", fontSize:"1.5em",color:"white"}}>
            Create Invoice
          </Card.Text>
          <Layout/>
        </Card.Body>
      </Card>
      <Row>
        <Col style={{textAlign: "center"}}>
          <HomePageBackButton/>
          <ListingButton/>
        </Col>
      </Row>
    </Jumbotron>

  );
}

export default CreateInvoice;
