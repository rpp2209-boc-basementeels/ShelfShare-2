import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BookCard from './BookCard.jsx';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import ReviewList from '../profile/components/ReviewList.jsx';
import ReviewForm from '../profile/components/ReviewForm.jsx';

const Gallery = (props) => {

  const handleClose = () => props.setShowDetail(false);

  const handleBorrowClick = (e) => {
    axios.post('/usage', {
      isbn: book.isbn,
      genre: book.genre,
      age: props.user.age,
      gender: props.user.gender
    })
    .then(() => {
      props.setShowDetail(false);
      alert(`Your request to borrow ${book.title} has been submitted. Please visit your orders page to manage requests.`);
    })
    .then(() => {
      axios.post('/borrow', {borrower_id: props.user.user_id, book_id: props.selectedBookId})
      .then ((result) => {
        if (result.data === 'There are no books available to borrow') {
          alert ('This book is unavailable to borrow');
        }
      })
      .catch(err => console.log('error borrowing', err))
    })
    .catch(err => console.log(err))
  }

  const [book, setBook] = useState({});
  const [authors, setAuthors] = useState([]);
  const [bookReviews, setBookReviews] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false);


  let bookAuthors = '';
  for (var i = 0; i < authors.length; i++) {
    bookAuthors += authors[i].author;
    if (i < authors.length - 1) {
      bookAuthors += ', ';
    }
  }

    let gallery = (props.books.map((book, index) =>
            <Col xs={12} md={6} lg={4} xl={3} key={index} className={index}>
            <BookCard setBookReviews={setBookReviews} authors={authors} setAuthors={setAuthors} setBook={setBook} id={book.book_id} books={props.books} selectedBookId={props.selectedBookId} updateSelectedBookId={props.updateSelectedBookId} setShowDetail={props.setShowDetail} title={book.title} author={book.author} image={book.image_url} description={"description placeholder"}/>
            </Col>
          ));

    if (gallery.length === 0) {
      gallery = <div> Sorry, No Matching Titles!</div>
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
      <Col>
      <ReviewList onModal={true} usernameThatWasClicked={props.usernameThatWasClicked} setUsernameThatWasClicked={props.setUsernameThatWasClicked} reviews={bookReviews}/>
      </Col>
    </Modal.Body>
    {showReviewForm ? <Container style={{"display": "flex", "justifyContent": "center", "alignItems": "center"}}>
        <ReviewForm book={book} username={props.username} setShowReviewForm={setShowReviewForm} showReviewForm={showReviewForm} />
      </Container> : <Modal.Footer style={{"display": "flex", "justifyContent": "center"}}>
      <Button onClick={() => {setShowReviewForm(true)}}>
        Leave a Review
      </Button>
      <Button onClick={handleBorrowClick} variant="primary">
        Request to Borrow
      </Button>
      <Button variant="secondary" onClick={handleClose}>
        Back to Gallery
      </Button>
    </Modal.Footer>}

    </Modal>

      <Container>

        <Row >
          {gallery}
        </Row>
      </Container>
    </div>
  )
}

  export default Gallery;