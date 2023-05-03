import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BookCard from './BookCard.jsx';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Gallery = () => {
  //conditional rendering of Gallery or Detail

  //iterate over the current list of books (state)
  //render a card for each book, passing appropriate prop

  return (
    <div>
      <Container>
        <Row xs={12} md={12} lg={12} xl={12} className="g-4">
          <Col>
            <BookCard title="Snake Eater" author="Squidward Potato" description={"It's the spongebob/MGS mashup you never knew you needed, and probably don't deserve"}/>
          </Col>
          <Col>
          <BookCard title="Snake Eater" author="Squidward Potato" description={"It's the spongebob/MGS mashup you never knew you needed, and probably don't deserve"}/>
          </Col>
          <Col>
          <BookCard title="Snake Eater" author="Squidward Potato" description={"It's the spongebob/MGS mashup you never knew you needed, and probably don't deserve"}/>
          </Col>
          <Col>
          <BookCard title="Snake Eater" author="Squidward Potato" description={"It's the spongebob/MGS mashup you never knew you needed, and probably don't deserve"}/>
          </Col>
          <Col>
          <BookCard title="Snake Eater" author="Squidward Potato" description={"It's the spongebob/MGS mashup you never knew you needed, and probably don't deserve"}/>
          </Col>
          <Col>
          <BookCard title="Snake Eater" author="Squidward Potato" description={"It's the spongebob/MGS mashup you never knew you needed, and probably don't deserve"}/>
          </Col>
          <Col>
          <BookCard title="Snake Eater" author="Squidward Potato" description={"It's the spongebob/MGS mashup you never knew you needed, and probably don't deserve"}/>
          </Col>
        </Row>
      </Container>

    </div>

  )
}

  export default Gallery;