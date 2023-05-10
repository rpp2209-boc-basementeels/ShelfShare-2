import React from 'react';
import Card from 'react-bootstrap/Card';

function BookCard({ b }) {
  let image_url;
  if (b.image_url) {
    let imageHost = b.image_url.slice(0, 26);
    console.log('imageHost', imageHost)
    if (imageHost = 'https://covers.openlibrary') {
      image_url = (b.image_url.slice(0, -5)).concat('M.jpg')
    }
  }
  const tooltip = `Title: ${b.title}\nAuthor: ${b.author}\nPublished: ${b.pub_date.slice(0, 10)}\nISBN: ${b.isbn}\nGenre: ${b.genre}`

  function addDefaultSrc(e) {
    e.target.src = require('./placeholder.png');
  }

  return (
    <Card border='light' style={{ width: '8rem' }} data-toggle="tooltip" data-placement="top" title={tooltip}>
      <Card.Img variant="top" src={image_url} onError={addDefaultSrc}/>
    </Card>
  );
}

export default BookCard;