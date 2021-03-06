import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const UpdateButton =(props)=> {
  const history = useHistory();

  const handleClick =()=>{
    history.push(`/updateInvoice/${props.invoiceID}`)
  };
  return (
    <Button
      variant='primary'
      onClick={handleClick}
    >
      Update invoice
    </Button>
  )
};

export default UpdateButton;
