import React, { Component } from 'react';
import TextFiled from "./TextField";
import TextArea from "./TextArea";
import Table from "./Table";
import SumOfProducts from './sumOfProducts'
import ProductRow from "./ProductRow";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

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
    };
    this.textHandler = this.textHandler.bind(this);
    this.submitButton = this.submitButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    event.preventDefault();
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
      .then(response=>console.log(response))
      .catch(e=>console.log(e))
    event.preventDefault();
    console.log('sumbit')
  }

  render(){
    return (
   <>
      <Form onSubmit={this.handleSubmit}>
        <TextArea
          label="Invoice information"
          name="invoiceText"
          value={this.state.invoiceText}
          onChange={this.textHandler}
        />
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
        <Table products={this.state.products}/>
        <ProductRow
          productName={this.state.productName}
          productPrice={this.state.productPrice}
          onChange={this.textHandler}
          onClick={this.submitButton}

        />
        <SumOfProducts products={this.state.products}/>
        <Button
          type='submit'
          variant="outline-success"
          size='lg'
        >Create Invoice</Button>
      </Form>
   </>
    );
  }
};

export default Layout;
