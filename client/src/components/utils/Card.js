import React from 'react';
import Card from 'react-bootstrap/Card';

const CustomCard =(props)=> {
  return (
        <Card>
          <Card.Header as='h3'>
            {props.head}
          </Card.Header>
          <Card.Body>
            {props.children}
          </Card.Body>
        </Card>
  );
};

export default CustomCard;
