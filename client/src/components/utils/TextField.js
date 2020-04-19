import React from 'react';
import Form from 'react-bootstrap/Form';

const TextFiled =(props)=> {
  return (
   <>
      <Form.Group controlId={props.id}>
       <Form.Label>{props.label}</Form.Label>
       <Form.Control
         type="text"
         name={props.name}
         placeholder={props.placeholder}
         value={props.value}
         onChange={props.onChange}
       />
       <Form.Text className="text-muted">
        {props.text}
       </Form.Text>
     </Form.Group>
   </>

  );
};

export default TextFiled;
