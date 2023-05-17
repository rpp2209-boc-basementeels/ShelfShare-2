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
      <Card onClick={handleClick} style={{ width: '14rem', margin: '1rem' }}>
      <Card.Img className="justify-content-center" variant="top" src={props.image} style={{ width: '12rem', height: 'auto', margin: '1rem' }}/>
      <Card.Body>
        <Card.Title className="justify-content-center">{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text >
        </Card.Text>
        <Button onClick={handleBorrowClick} className="justify-content-center" variant="primary">Borrow</Button>
      </Card.Body>
      </Card>
      </Container>
    </div>

  )
}

  export default BookCard;