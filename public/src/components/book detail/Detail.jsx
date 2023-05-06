import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BookCard from '../homepage/BookCard.jsx';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Detail = (props) => {
  //conditional rendering of Gallery or Detail

  //iterate over the current list of books (state)
  //render a card for each book, passing appropriate prop

  return (
    <div>
      <Container>
        <Row xs={1} md={1} lg={1} xl={1} className="g-4">
          <Col>
            {/* <BookCard title={props.book.name} author={props.book.author} description={"book description"}/> */}
          </Col>
        </Row>
      </Container>

    </div>

  )
}

  export default Detail;