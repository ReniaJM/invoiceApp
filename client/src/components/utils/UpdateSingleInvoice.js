import React, {Component} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomCard from './CustomCard';
import TextFiled from './TextField';
import TableProduct from './TableProduct';
import ProductRow from './ProductRow';
import SumOfProducts from './sumOfProducts';
import Notification from './Notification';
import BackButton from './BackButton'

class UpdateSingleInvoice extends Component  {
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
        productPrice:'',
        productName:'',
        show: false,
        title: '',
        content: '',
      };
      this.textHandlerUpdate = this.textHandlerUpdate.bind(this);
      this.submitButton = this.submitButton.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.closeWindow = this.closeWindow.bind(this);
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

  closeWindow(){
    this.setState({
      show: false,
    })
  }

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
    let finalSumUpdate = 0;
    const currentProducts = this.state.products;
    {currentProducts.map(product=>{
      finalSumUpdate = finalSumUpdate + product.price;
    })}
    const data = {
      seller: this.state.sellerName,
      seller_address: this.state.sellerAddress,
      customer: this.state.customerName,
      customer_address: this.state.customerAddress,
      products: this.state.products,
      sumOfProducts: finalSumUpdate,
      infoInvoice: this.state.invoiceText
    };
    const url =`http://localhost:5000/invoice/update/${this.props.invoiceID}`;
    axios.put(url,data)
      .then((response)=>{
        if(response.status === 200){
          this.setState({
            show :true,
            title: "Success!",
            content: "The invoice was created successfully!"
          })
        }else{
          this.setState({
            show :true,
            title: "Error!",
            content: "The invoice was not created!"
          })
        }
      })
      .catch(e=>console.log(e),);
  }

  textHandlerUpdate(event){
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
    }
    if(event.target.name === 'productPrice'){
      this.setState({
        productPrice: event.target.value
      });
    }
  };

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
      <Card bg='dark'>
        <Card.Header as='h3' style={{textAlign: "center", color:"white"}}>
          Update invoice
        </Card.Header>
        <Card.Body>
          <Form onSubmit={this.handleSubmit}>
          <Container>
            <Row style={{marginTop:'1em'}}>
              <Col>
                <CustomCard head='Invoice information'>
                  <TextFiled
                    label="Enter information about invoice"
                    name="invoiceText"
                    value={this.state.invoiceText}
                    onChange={this.textHandlerUpdate}
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
                    onChange={this.textHandlerUpdate}
                    text="Enter the full name"
                  />
                  <TextFiled
                    id="seller-address"
                    label="Seller's address"
                    name="sellerAddress"
                    placeholder="Fill the address"
                    value={this.state.sellerAddress}
                    onChange={this.textHandlerUpdate}
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
                    onChange={this.textHandlerUpdate}
                    text="Type the full name"
                  />
                  <TextFiled
                    id="customer-address"
                    label="Customer's address"
                    name="customerAddress"
                    placeholder="Fill the address"
                    value={this.state.customerAddress}
                    onChange={this.textHandlerUpdate}
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
                    onChange={this.textHandlerUpdate}
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
                  Update Invoice
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
        </Card.Body>
      </Card>
      <Row>
        <Col style={{textAlign: "center"}}>
          <BackButton/>
        </Col>
      </Row>
    </Jumbotron>
  )}
};

export default UpdateSingleInvoice;
