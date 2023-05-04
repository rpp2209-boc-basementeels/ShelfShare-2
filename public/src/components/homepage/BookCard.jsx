import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BookCard = (props) => {
  //conditional rendering of Gallery or Detail

  //<div onClick={props.setBookClicked(true)}></div>
  return (
    <div>

      <Card onClick={() => {props.setBookClicked(true)}} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">by {props.author}</Card.Subtitle>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Borrow</Button>
      </Card.Body>
      </Card>

    </div>

  )
}

  export default BookCard;