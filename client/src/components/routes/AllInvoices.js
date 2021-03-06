import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomePageBackButton from '../utils/HomePageBackButton';
import TableInvoice from '../utils/TableInvoice';
import Notification from '../utils/Notification'

class AllInvoices extends Component {
  constructor(props){
    super(props);
    this.state={
      dataInvoices: [],
      show: false,
      title: '',
      content: '',
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
  }

  componentDidMount():void {
    const url = 'http://localhost:5000/invoice/show';
    axios.get(url)
      .then((response)=>{
        if(response.status === 200){
        }else{
          console.log("Houston we have a problem!")
        }
        let invoices=[];
        const copyData  = response.data;
        copyData.map((invoice, i)=>{
          invoices.push(
            {
              id : invoice._id,
              infoInvoice : invoice.infoInvoice
            }
          )
        });
        this.setState(state => {
          return {
            dataInvoices: state.dataInvoices.concat(invoices)
          }
        });
      })
      .catch(e=>console.log(e),);
  }

  handleDelete(invoiceID){
    const url = `http://localhost:5000/invoice/delete/${invoiceID}`;
    axios.delete(url)
      .then(res => {
        if(res.status === 200){
          console.log(res)
          this.setState({
            show :true,
            title: "Success!",
            content: "The invoice was deleted successfully!"
          });
          const copyDataInvoices = this.state.dataInvoices;
          this.state.dataInvoices.map((item,i)=>{
            if(item.id === invoiceID){
              copyDataInvoices.splice(i, 1);
              this.setState({
                dataInvoices : copyDataInvoices
              })
            }
          })
        }else{
          console.log("Houston we have a problem!")
          this.setState({
            show :true,
            title: "Error!",
            content: "The invoice was not deleted!"
          })
        }
      })
      .catch(e=>console.log(e),);
  }

  closeWindow(){
    this.setState({
      show: false,
    })
  }
  render(){
    return (
        <Jumbotron>
          <Card bg='dark' text='white' style={{padding: "2em"}}>
            <TableInvoice
              dataInvoices={this.state.dataInvoices}
              handleDelete={this.handleDelete}
            />
          </Card>
          <Notification
          show={this.state.show}
          title={this.state.title}
          content={this.state.content}
          closeWindow={this.closeWindow}
          />
          <Row>
            <Col style={{textAlign: "center"}}>
              <HomePageBackButton/>
            </Col>
          </Row>
        </Jumbotron>
    );
  }
};

export default AllInvoices;
