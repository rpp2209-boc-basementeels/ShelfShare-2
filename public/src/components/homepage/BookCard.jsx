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
    axios.get('/detail', {params: {bookId: props.id}})
    .then((book) => {
      //set authors state
      //set book state
      console.log('handle click - authors', book.data.authors);
      props.setBook(book.data.books[0]);
      props.setAuthors(book.data.authors);
    })
    .then(() => {
      props.setShowDetail(true);
    })
  }

  //iterate over the authors array


  return (
    <div>
      <Container className={props.index}>
      <Card onClick={handleClick} style={{ width: '18rem', height: '20rem', margin: '1rem' }}>
      <Card.Img className={props.index} variant="top" src={props.image} style={{ width: '12rem' }}/>
      <Card.Body>
        <Card.Title className={props.index}>{props.title}</Card.Title>
        <Card.Subtitle className={props.index} className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text className={props.index}>
        </Card.Text>
        <Button variant="primary">Borrow</Button>
      </Card.Body>
      </Card>
      </Container>
    </div>

  )
}

  export default BookCard;