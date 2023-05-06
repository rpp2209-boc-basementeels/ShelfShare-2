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

  return (
    <div>
      <Container>
        <Row >

          {props.books.map((book) =>

            <Col xs={12} md={6} lg={4} xl={3} className="g-4">
            <BookCard setBookClicked={props.setBookClicked} title={book.name} author={book.author} description={"description placeholder"}/>
            </Col>
          )}

        </Row>
      </Container>

    </div>

  )
}

  export default Gallery;