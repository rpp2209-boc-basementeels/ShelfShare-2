import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function BookModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body style={{display: 'flex'}}>
        <img src={props.image_url} style={{ height: "10rem" }}/>
        <ListGroup style={{paddingLeft: '0.75rem', width:'100%'}}>
          <ListGroup.Item><b>Title: </b>{props.b.title}</ListGroup.Item>
          <ListGroup.Item><b>Author: </b>{props.b.author}</ListGroup.Item>
          <ListGroup.Item><b>Genre: </b>{props.b.genre}</ListGroup.Item>
          <ListGroup.Item><b>Publication Date: </b>{props.b.pub_date.slice(0, 10)}</ListGroup.Item>
          <ListGroup.Item><b>ISBN: </b>{props.b.isbn}</ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BookModal;