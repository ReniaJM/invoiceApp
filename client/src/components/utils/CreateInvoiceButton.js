import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const CreateInvoiceButton =()=> {
  const history = useHistory();

  const handleClick =()=>{
    history.push('/creteInvoice')
  };
  return (
    <Button
      variant='danger'
      onClick={handleClick}
    >
      Create Invoice
    </Button>
  )
};

export default CreateInvoiceButton;
