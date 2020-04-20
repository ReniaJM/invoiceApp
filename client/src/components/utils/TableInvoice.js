import React  from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ViewButton from './ViewButton'


const TableInvoice =(props)=>{

    let idAndInfoInvoice = props.dataInvoices;
    let invoicesArray=[];

    {idAndInfoInvoice.map((invoice, i) =>
      invoicesArray.push(
        <Row key={i} style={{marginTop: "1em"}}>
          <Col>
            <h6>{invoice.id}</h6>
          </Col>
          <Col>
            <h6>{invoice.infoInvoice}</h6>
           </Col>
          <Col>
            <ButtonGroup>
              <Button
                variant='danger'
                onClick={()=>{props.handleDelete(invoice.id)}}>
                Delete invoice
              </Button>
              <ViewButton
              invoiceID={invoice.id}
              />
            </ButtonGroup>
          </Col>
        </Row>
      )
    )}
    return (
      <Container>
        <Row>
          <Col>
            <h4>Invoice ID</h4>
          </Col>
          <Col>
            <h4>Invoice Info</h4>
          </Col>
          <Col>
            <h4>Actions </h4>
          </Col>
        </Row>
        {invoicesArray}
      </Container>
    )
};

export default TableInvoice;
