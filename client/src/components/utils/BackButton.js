import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const BackButton =()=> {
  const history = useHistory();

  const handleClick =()=>{
    history.push('/allInvoices')
  };
  return (
    <Button style={{margin:"2em"}}
      variant='warning'
      onClick={handleClick}
    >
      Go Back
    </Button>
  )
};

export default BackButton;
