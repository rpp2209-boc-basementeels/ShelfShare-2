import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import BookModal from './BookModal.jsx';

function BookCard({ b }) {
  const [modalShow, setModalShow] = useState(false);

  let image_url;
  if (b.image_url) {
    let imageHost = b.image_url.slice(0, 26);
    if (imageHost === 'https://covers.openlibrary') {
      image_url = (b.image_url.slice(0, -5)).concat('L.jpg')
    } else {
      image_url = b.image_url;
    }
  }

  function addDefaultSrc(e) {
    e.target.src = require('./placeholder.png');
  }

  return (
    <>
      <Card border='light' style={{ width: '13.5rem', margin:'0.5rem' }}>
      <Card.Img
        variant="top"
        src={image_url || require('./placeholder.png')}
        onError={addDefaultSrc}
        style={{ height: "100%" }}
        className="align-items-center"
        onClick={() => setModalShow(true)}
      />
      </Card>
      <BookModal
        b={b}
        image_url={image_url || require('./placeholder.png')}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default BookCard;