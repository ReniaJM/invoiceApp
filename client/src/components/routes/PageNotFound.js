import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import HomePageBackButton from '../utils/HomePageBackButton';

const PageNotFound =()=> {
  return (
    <Jumbotron>
      <div style={{textAlign: "center", margin:"2em"}}>
        <h1>Page Not Found :(</h1>
        <Row>
          <Col>
          <HomePageBackButton/>
          </Col>
        </Row>
      </div>
    </Jumbotron>

  );
}

export default PageNotFound;
