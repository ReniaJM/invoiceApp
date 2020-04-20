import React, { Component } from 'react';
import axios from 'axios';
import Card from "react-bootstrap/Card";
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

  componentDidMount() {
    const url = 'http://localhost:5000/invoice/show';
    axios.get(url)
      .then((response)=>{
        if(response.status === 200){
          console.log(response.data)
        }else{
          console.log("Houston we have a problem!")
        }
        let invoices=[];
        const ar= response.data;
        ar.map((invoice, i)=>{
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
        console.log(this.state.dataInvoices)
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

    console.log(invoiceID, 'to jest handleDelete')
  }

  closeWindow(){
    this.setState({
      show: false,
    })
  }
  render(){
    return (
      <>
        <Card bg='dark' text='white'>
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
      </>
    );
  }
};

export default AllInvoices;
