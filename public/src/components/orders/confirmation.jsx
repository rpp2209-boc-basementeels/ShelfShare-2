import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

var Confirmation = () => {
  return (

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://st3.depositphotos.com/1392007/16560/i/600/depositphotos_165602958-stock-photo-hummingbird-and-a-fruit-blossom.jpg"/>
    <Card.Body>
      <Card.Title>Shipping Confirmed!</Card.Title>

      <ListGroup variant="flush">
        <ListGroup.Item>Hey There! Please ship the book to our Distribution Center at:</ListGroup.Item>
        <ListGroup.Item>Hummingbird Laboratorios DC</ListGroup.Item>
        <ListGroup.Item>119 Nueces Street</ListGroup.Item>
        <ListGroup.Item>Austin, TX 78701</ListGroup.Item>
      </ListGroup>

      <Button onClick={(e) => {
        e.preventDefault();
        window.location.reload(false);
      }}>Close</Button>
    </Card.Body>
  </Card>

  );
}

export default Confirmation;