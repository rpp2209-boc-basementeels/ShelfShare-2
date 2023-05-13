import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

const BookCard = (props) => {
  //conditional rendering of Gallery or Detail

  //<div onClick={props.(true)}></div>

  const handleClick = (event) => {
    props.updateSelectedBookId(props.id);
    //make axios get request for the individual book info
    axios.get('/detail', {params: {bookId: props.id}});
    //THEN
    //-> props.setShowDetail(true);
  }

  return (
    <div>
      <Container className={props.index}>
      <Card onClick={handleClick} style={{ width: '18rem' }}>
      <Card.Img className={props.index} variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className={props.index}>{props.title}</Card.Title>
        <Card.Subtitle className={props.index} className="mb-2 text-muted">by {props.author}</Card.Subtitle>
        <Card.Text className={props.index}>
          {props.description}
        </Card.Text>
        <Button variant="primary">Borrow</Button>
      </Card.Body>
      </Card>
      </Container>
    </div>

  )
}

  export default BookCard;