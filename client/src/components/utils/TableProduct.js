import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TableProduct =(props)=> {
    let productsArray =[];
    const allProducts = props.products;
    {allProducts.map((product, i) =>
      productsArray.push(
        <Row key={i}>
          <Col>{product.name}</Col>
          <Col>${product.price}</Col>
        </Row>
      )
    )}
    return (
        <Container>
          {productsArray}
        </Container>
    )
};

export default TableProduct;
