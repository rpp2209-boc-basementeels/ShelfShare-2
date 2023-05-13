import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BookCard from './BookCard.jsx';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';

const Gallery = (props) => {

  const handleClose = () => props.setShowDetail(false);

  const [book, setBook] = useState({});

  return (
    <div>

    <Modal
      show={props.showBookDetail}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
    <Modal.Header closeButton>
      <Modal.Title>Book Title: {book.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      This is the Modal Body Text
      It should contain a thumbnail of the book
      the author or authors
      genre
      a book description
    </Modal.Body>
    <Modal.Footer>
    <Button variant="primary" onClick={handleClose}>
        Request to Borrow
      </Button>
      <Button variant="secondary" onClick={handleClose}>
        Back to Gallery
      </Button>
    </Modal.Footer>
    </Modal>

      <Container>
        <Row >
          {props.books.map((book, index) =>
            <Col xs={12} md={6} lg={4} xl={4} key={index} className={index}>
            <BookCard setBook={setBook} id={book.book_id} books={props.books} updateSelectedBookId={props.updateSelectedBookId} setShowDetail={props.setShowDetail} title={book.title} author={book.author} image={book.image_url_large} description={"description placeholder"}/>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  )
}

  export default Gallery;