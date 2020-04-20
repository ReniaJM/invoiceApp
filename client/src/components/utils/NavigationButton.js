import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const TableProduct =()=> {
  const history = useHistory();

  const handleClick =()=>{
    history.push('/allInvoices')
  };
  return (
    <Button
      variant='warning'
      onClick={handleClick}
    >
      Go Back
    </Button>
  )
};

export default TableProduct;
