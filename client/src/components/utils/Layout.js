import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextFiled from './TextField';
import TableProduct from './TableProduct';
import SumOfProducts from './sumOfProducts'
import ProductRow from './ProductRow';
import Notification from './Notification'
import CustomCard from './CustomCard';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoiceText:'',
      sellerName: '',
      sellerAddress: '',
      customerName:'',
      customerAddress:'',
      productName:'',
      productPrice:'',
      products:[],
      show: false,
      title: '',
      content: '',
    };

    this.textHandler = this.textHandler.bind(this);
    this.submitButton = this.submitButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
  }

  closeWindow(){
    this.setState({
      show: false,
    })
  }

  textHandler(event){
    if(event.target.name === 'invoiceText'){
      this.setState({
        invoiceText: event.target.value
      });
    }
    if(event.target.name === 'sellerName'){
      this.setState({
        sellerName: event.target.value
      });
    }
    if(event.target.name === 'sellerAddress'){
      this.setState({
        sellerAddress: event.target.value
      });
    }
    if(event.target.name === 'customerName'){
      this.setState({
        customerName: event.target.value
      });
    }
    if(event.target.name === 'customerAddress'){
      this.setState({
        customerAddress: event.target.value
      })
    }
    if(event.target.name === 'productName'){
      this.setState({
        productName:event.target.value
      });
      console.log(this.state.productName)
    }
    if(event.target.name === 'productPrice'){
      this.setState({
        productPrice: event.target.value
      });
      console.log(this.state.productPrice)
    }
  };

  submitButton(){
    this.setState( state =>{
      const currentProducts = this.state.products;
      return {
        products: currentProducts.concat([
          {
            name:  state.productName,
            price: parseFloat(state.productPrice),

          }
        ])
      }
    });
  };

  handleSubmit(event){
    let finalSum = 0;
    const currentProducts = this.state.products;
    {currentProducts.map(product=>{
      finalSum = finalSum + product.price;
    })}

    const data = {
      seller: this.state.sellerName,
      seller_address: this.state.sellerAddress,
      customer: this.state.customerName,
      customer_address: this.state.customerAddress,
      products: this.state.products,
      sumOfProducts: finalSum,
      infoInvoice: this.state.invoiceText
    };
    const url = 'http://localhost:5000/invoice/create';
    axios.post(url,data)
      .then((response)=>{
        if(response.status === 200){
          console.log(response)
          this.setState({
            show :true,
            title: "Success!",
            content: "The invoice was cretead successfully!"
          })
        }else{
          this.setState({
            show :true,
            title: "Error!",
            content: "The invoice was not cretead!"
          })
        }
      })
      .catch(e=>console.log(e),);
    event.preventDefault();
  }

  render(){
    return (
   <>
      <Form onSubmit={this.handleSubmit}>
        <Container>
          <Row style={{marginTop:'1em'}}>
            <Col>
              <CustomCard head='Invoice information'>
                <TextFiled
                  label="Enter information about invoice"
                  name="invoiceText"
                  value={this.state.invoiceText}
                  onChange={this.textHandler}
                />
              </CustomCard>
            </Col>
          </Row>
          <Row style={{marginTop:'1em'}}>
            <Col>
              <CustomCard head='Seller name'>
                <TextFiled
                  id="seller-name"
                  label="Seller's name"
                  name="sellerName"
                  placeholder="Fill the name"
                  value={this.state.sellerName}
                  onChange={this.textHandler}
                  text="Enter the full name"
                />
                <TextFiled
                  id="seller-address"
                  label="Seller's address"
                  name="sellerAddress"
                  placeholder="Fill the address"
                  value={this.state.sellerAddress}
                  onChange={this.textHandler}
                  text="Enter the full address"
                />
              </CustomCard>
            </Col>

            <Col>
              <CustomCard head='Customer name'>
                <TextFiled
                  id="customer-name"
                  label="Customer's name"
                  name="customerName"
                  placeholder="Fill the name"
                  value={this.state.customerName}
                  onChange={this.textHandler}
                  text="Type the full name"
                />
                <TextFiled
                  id="customer-address"
                  label="Customer's address"
                  name="customerAddress"
                  placeholder="Fill the address"
                  value={this.state.customerAddress}
                  onChange={this.textHandler}
                  text="Enter the full address"
                />
             </CustomCard>
            </Col>
          </Row>
          <Row style={{marginTop:'3em'}}>
            <Col>
              <CustomCard head='Add products'>
                <TableProduct products={this.state.products}/>
                <ProductRow
                  productName={this.state.productName}
                  productPrice={this.state.productPrice}
                  onChange={this.textHandler}
                  onClick={this.submitButton}
                />
              </CustomCard>
            </Col>
          </Row>
          <Row style={{marginTop:'1em'}}>
            <Col>
              <CustomCard head='Sum of products'>
                <SumOfProducts products={this.state.products}/>
              </CustomCard>
            </Col>
          </Row>
          <Row style={{marginTop:'1em'}}>
            <Col  style={{textAlign:"center"}}>
              <Button
                type='submit'
                variant="primary"
                size='lg'>
                Create Invoice
              </Button>
            </Col>
          </Row>
        </Container>
        <Notification
          show={this.state.show}
          title={this.state.title}
          content={this.state.content}
          closeWindow={this.closeWindow}
        />
      </Form>
   </>
    );
  }
};

export default Layout;
