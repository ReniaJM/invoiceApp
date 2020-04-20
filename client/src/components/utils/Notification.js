import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Notification =(props)=> {
    return (
      <Modal show={props.show}>
          <Modal.Header>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props.content}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              size='md'
              onClick={props.closeWindow}>
              Close
            </Button>
          </Modal.Footer>
     </Modal>
    )
};

export default Notification;
