import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BookCard from './BookCard.jsx';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Gallery = (props) => {
  //conditional rendering of Gallery or Detail

  //iterate over the current list of books (state)
  //render a card for each book, passing appropriate prop

  //books array = props.books;
  //iterate over props.books
  //for each item, render a Column containing a book card
  var handleClick = (event) => {
    //update which book was clicked
    //grab the key of the clicked element
    //the key corresponds to the index of the book in the current books array
    //books array at index should be the correct book object
    var book = props.books[event.target.key];
    console.log('event target', event.target.tagName);
    props.updateSelectedBook(book);
    //indicate to render the detail modal
    props.setShowDetail(true);
  }


  return (
    <div>
      <Container>
        <Row >
          {props.books.map((book, index) =>
            <Col xs={12} md={6} lg={4} xl={4} className="g-4" key={index} onClick={handleClick}>
            <BookCard books={props.books} updateSelectedBook={props.updateSelectedBook} setShowDetail={props.setShowDetail} title={book.name} author={book.author} description={"description placeholder"}/>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  )
}

  export default Gallery;