import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const ListingButton =()=> {
  const history = useHistory();

  const handleClick =()=>{
    history.push('/allInvoices')
  };
  return (
    <Button style={{margin:"2em"}}
      variant='success'
      onClick={handleClick}
    >
      Show All Invoices
    </Button>
  )
};

export default ListingButton;
