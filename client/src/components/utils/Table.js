import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Table extends Component {
  render(){
    let productsArray =[];

    const {products} = this.props;
    {products.map((product, i) =>
      productsArray.push(
        <Row key={i}>
          <Col>{product.name}</Col>
          <Col>${product.price}</Col>
        </Row>
      )
    )
    }
    return (
        <Container>
          {productsArray}
        </Container>
    )
  }

};

export default Table;
