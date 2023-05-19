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
    axios.get('/detail', {params: {bookId: props.id}})
    .then((book) => {
      props.setBook(book.data.books[0]);
      props.setAuthors(book.data.authors);
    })
    .then(() => {
      //request the reviews for the book
      axios.get(`/bookReviews/${props.id}`)
        .then((results) => {
        props.setBookReviews(results.data);
      })
      .catch((err) => {
        console.log('book reviews error', err);
      })
    })
    .then(() => {
      props.setShowDetail(true);
    })
    .catch((err) => {
      console.log(err);
    })
  }


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
        <Button className="justify-content-center" variant="outline-dark">More Information</Button>
      </Card.Body>
      </Card>
      </Container>
    </div>

  )
}

  export default BookCard;