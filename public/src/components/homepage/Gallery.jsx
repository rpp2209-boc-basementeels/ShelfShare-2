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
  const [authors, setAuthors] = useState([]);

  let bookAuthors = '';
  for (var i = 0; i < authors.length; i++) {
    bookAuthors += authors[i].author;
    if (i < authors.length - 1) {
      bookAuthors += ', ';
    }
  }

  return (
    <div>

    <Modal
      size= "lg"
      show={props.showBookDetail}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
    <Modal.Header closeButton>
      <Modal.Title>{book.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Col>
      <Row className="justify-content-center"><img src={book.image_url} style={{width: '35rem'}}/></Row>
      <Row className="justify-content-center">Author(s): {bookAuthors}</Row>
      <Row className="justify-content-center">Genre: {book.genre}</Row>
      </Col>
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
            <BookCard authors={authors} setAuthors={setAuthors} setBook={setBook} id={book.book_id} books={props.books} updateSelectedBookId={props.updateSelectedBookId} setShowDetail={props.setShowDetail} title={book.title} author={book.author} image={book.image_url} description={"description placeholder"}/>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  )
}

  export default Gallery;