import React, {useState} from 'react';
import TextFiled from "./TextField";
import TextArea from "./TextArea";
import Table from "./Table";
import SumOfProducts from './sumOfProducts'

const Layout=()=> {

  const [sellerName, setSellerName]=useState('');
  const [sellerAddress, setSellerAddress]=useState('');
  const [customerName, setCustomerName]=useState('');
  const [customerAddress, setCustomerAddress]=useState('');
  const [invoiceText, setInvoiceText]=useState('');
  const [products]=useState([
    {name:"młotek ", price:200},
    {name:"łopata ", price:100},
    {name:"brabki ", price:60},
    ]);

  return (
    <>
      <TextArea
        label="Invoice information"
        name="invoiceInfo"
        value={invoiceText}
        onChange={(e)=> setInvoiceText(e.target.value)}
      />
      <TextFiled
        id="seller-name"
        label="Seller's name"
        name="sellerName"
        placeholder="Fill the name"
        value={sellerName}
        onChange={(e)=> setSellerName(e.target.value)}
        text="Enter the full name"
      />
      <TextFiled
      id="seller-address"
      label="Seller's address"
      name="sellerAddress"
      placeholder="Fill the address"
      value={sellerAddress}
      onChange={(e)=> setSellerAddress(e.target.value)}
      text="Enter the full address"
      />
      <TextFiled
        id="customer-name"
        label="Customer's name"
        name="customerName"
        placeholder="Fill the name"
        value={customerName}
        onChange={(e)=>  setCustomerName(e.target.value)}
        text="Type the full name"
      />
      <TextFiled
        id="customer-address"
        label="Customer's address"
        name="customerAddress"
        placeholder="Fill the address"
        value={customerAddress}
        onChange={(e)=> setCustomerAddress(e.target.value)}
        text="Enter the full address"
      />
      <Table products={products}/>
      <SumOfProducts products={products}/>
    </>
  );
};

export default Layout;
