import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

var Confirmation = (props) => {
  return (

    <div>
      <p>Hey There!</p>
      <p>Please ship the book to our Distribution Center at:</p>
      <p>Hummingbird Laboratorios DC</p>
      <p>119 Nueces Street</p>
      <p>Austin, TX 78701</p>
      <Button onClick={(e) => {
        e.preventDefault();
        window.location.reload(false);
      }}>Close</Button>
      </div>

  //   <Modal
  //     size="lg"
  //     aria-labelledby="contained-modal-title-vcenter"
  //     centered
  //   >
  //     <Modal.Body style={{display: 'flex'}}>
  //       {/* <img src={props.image_url} style={{ height: "10rem" }}/> */}
  //       <ListGroup style={{paddingLeft: '0.75rem', width:'100%'}}>
  //         <ListGroup.Item>Hey There!</ListGroup.Item>
  //         <ListGroup.Item>Please ship the book to our Distribution Center at:</ListGroup.Item>
  //         <ListGroup.Item>Hummingbird Laboratorios DC</ListGroup.Item>
  //         <ListGroup.Item>119 Nueces Street</ListGroup.Item>
  //         <ListGroup.Item>Austin, TX 78701</ListGroup.Item>
  //       </ListGroup>
  //     </Modal.Body>
  //     <Modal.Footer>
  //       <Button onClick={(e) => {
  //         e.preventDefault();
  //         window.location.reload(false);
  //       }}>Close</Button>
  //     </Modal.Footer>
  //   </Modal>
  );
}

export default Confirmation;