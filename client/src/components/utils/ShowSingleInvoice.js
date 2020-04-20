import React, { Component } from 'react';
import axios from 'axios';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TableProduct from './TableProduct'
import NavigationButton from './BackButton'


class ShowSingleInvoice extends Component {
  constructor(props){
    super(props);
    this.state = {
      isError: false,
      invoiceText:'',
      sellerName: '',
      sellerAddress: '',
      customerName:'',
      customerAddress:'',
      products:[],
      finalSum: '',
      date: '',
      invoiceId: ''
    }
  }

  componentDidMount() {
    const url =`http://localhost:5000/invoice/show/${this.props.invoiceID}`;
    axios.get(url)
      .then((response)=>{
        if(response.status === 200){
          const copyData = response.data;
          this.setState({
            invoiceText: copyData.infoInvoice,
            sellerName: copyData.seller,
            sellerAddress: copyData.seller_address,
            customerName:copyData.customer,
            customerAddress: copyData.customer_address,
            products: copyData.products,
            finalSum: copyData.sumOfProducts,
            date: copyData.date,
            invoiceId: copyData._id,
          })
        }else{
          throw new Error();
        }

      })
      .catch(()=>{
          this.setState({
            isError : true
          });
        console.log('Something went wrong!')
      });
  }

  render(){
    if(this.state.isError){
      return(
        <Jumbotron>
          <Card bg='dark' text='white'>
            <Card.Header as='h3' style={{textAlign: "center"}}>
              Invoice
            </Card.Header>
            <Card.Body>
              <h2>Error!!! We have some problems!</h2>
            </Card.Body>
          </Card>
        </Jumbotron>
      )
    }
    return (
      <Jumbotron>
        <Card bg='dark' text='white'>
          <Card.Header as='h3' style={{textAlign: "center"}}>
            Invoice
          </Card.Header>
          <Card.Body>
            <Container>
              <Row>
                <Col style={{textAlign: "right", color: "white"}}>
                  <h4>Seller's Name and Address</h4>
                  <p>{this.state.sellerName}</p>
                  <p>{this.state.sellerAddress}</p>
                </Col>
              </Row>
              <Row>
                <Col style={{textAlign: "right", color: "white"}}>
                  <h4>Customer Name and Address</h4>
                  <p>{this.state.customerName}</p>
                  <p>{this.state.customerAddress}</p>
                </Col>
              </Row>
              <Row>
                <Col style={{textAlign: "left", color: "white"}}>
                  <h4>Invoice ID and Date</h4>
                  <p>{this.state.invoiceId}</p>
                  <p>{new Date(this.state.date).toLocaleDateString()}</p>
                </Col>
              </Row>
              <Row>
                <Col style={{textAlign: "left", color: "white"}}>
                  <h4>Invoice Information</h4>
                  <p>{this.state.invoiceText}</p>
                </Col>
              </Row>
              <Row>
                <Col style={{textAlign: "left", color: "white"}}>
                  <h4>Products Purchased</h4>
                  <TableProduct products={this.state.products}/>
                </Col>
              </Row>
              <Row>
                <Col style={{textAlign: "left", color: "white"}}>
                  <h4>Final Price</h4>
                  <p>${this.state.finalSum}</p>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Row>
          <Col style={{textAlign: "center"}}>
            <NavigationButton/>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
};

export default ShowSingleInvoice;
