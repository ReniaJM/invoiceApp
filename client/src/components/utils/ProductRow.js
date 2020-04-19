import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import TextFiled from "./TextField";

const ProductRow =(props)=> {

    return (
      <Container>
        <Row>
          <Col>
            <TextFiled
              id="productName"
              label="Product name"
              name="productName"
              placeholder="Fill the name of the product"
              value={props.productName}
              onChange={props.onChange}
              text="Enter the name of the product"
            />
          </Col>
          <Col>
            <TextFiled
              id="productPrice"
              label="Product price"
              name="productPrice"
              placeholder="Fill the price of the product"
              value={props.productPrice}
              onChange={props.onChange}
              text="Enter the price"
            />
          </Col>
          <Col>
            <Button
              variant="outline-success"
              size='lg'
              onClick={props.onClick}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    )

};

export default ProductRow ;
