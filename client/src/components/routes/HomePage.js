import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CreateInvoiceButton from '../utils/CreateInvoiceButton';
import ListingButton from '../utils/ListingButton';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomePage =()=> {
  return (
    <Jumbotron>
      <div style={{textAlign: "center", margin:"2em"}}>
        <h1>Create Your Invoice</h1>
        <Row>
          <Col>
            <CreateInvoiceButton/>
            <ListingButton/>
          </Col>
        </Row>
      </div>
    </Jumbotron>

  );
};

export default HomePage;
