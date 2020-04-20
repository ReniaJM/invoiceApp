import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const HomePageBackButton =()=> {
  const history = useHistory();

  const handleClick =()=>{
    history.push('/')
  };
  return (
    <Button style={{margin:"2em"}}
            variant='warning'
            onClick={handleClick}
    >
      Back To Homepage
    </Button>
  )
};

export default HomePageBackButton;
