import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const TextArea =(props)=> {
  return (
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text>
          <h6>{props.label}</h6>
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        as="textarea"
        aria-label="With textarea"
        name={props.name}
        value={props.value}
        onChange={props.onChange}

      />
    </InputGroup>
  );
};

export default TextArea;
