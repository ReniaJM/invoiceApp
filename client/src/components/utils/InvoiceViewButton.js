import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const InvoiceViewButton =(props)=> {
  const history = useHistory();

  const handleClick =()=>{
    history.push(`/showInvoice/${props.invoiceID}`)
console.log(props.invoiceID)
  };

    return (
    <Button
      variant='warning'
      onClick={handleClick}
    >
      Show invoice
    </Button>
    )
};

export default InvoiceViewButton;
