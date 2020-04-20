import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ShowSingleInvoice extends Component {

  componentDidMount() {
  }

  render(){
    return (
      <Jumbotron>
        <Card bg='dark' text='white'>
          <Card.Header as='h3' style={{textAlign: "center"}}>
            Sales invoice
          </Card.Header>
          <Card.Body>
            <Container>
              <Row>
                <Col style={{textAlign: "right", color: "white"}}>
                  <h5>Seller's Name and Address</h5>
                </Col>
              </Row>
              <Row>
                <Col style={{textAlign: "right", color: "white"}}>
                  <h5>Customer Name and Address</h5>
                </Col>
              </Row>
              <Row>
                <Col style={{textAlign: "left", color: "white"}}>
                  <h5>Invoice ID and Date</h5>
                </Col>
              </Row>
              <Row>
                <Col style={{textAlign: "left", color: "white"}}>
                  <h5>Invoice Information</h5>
                </Col>
              </Row>
              <Row>
                <Col style={{textAlign: "left", color: "white"}}>
                  <h5>Products Purchased</h5>
                </Col>
              </Row>
              <Row>
                <Col style={{textAlign: "left", color: "white"}}>
                  <h5>Final Price</h5>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Jumbotron>
    );
  }

};

export default ShowSingleInvoice;
