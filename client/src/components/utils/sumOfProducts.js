import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SumOfProducts extends Component {
  render(){
    let sum = 0;
    const {products} = this.props;
    {products.map( product =>
    sum = sum + product.price
      )
    }
    return (
      <Container>
        <Row>
          <Col>
            <h4>${sum}</h4>
          </Col>
        </Row>
      </Container>
    )
  }

};

export default SumOfProducts;
