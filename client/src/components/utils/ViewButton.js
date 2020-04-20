import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const ViewButton =(props)=> {
  const history = useHistory();

  const handleClick =()=>{
    history.push(`/showInvoice/${props.invoiceID}`)
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

export default ViewButton;
