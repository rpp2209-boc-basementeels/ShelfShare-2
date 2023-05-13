import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import BookCard from './BookCard.jsx'

const Shelf = ({ fetchTrigger, libraryOwner }) => {
  const [library, setLibrary] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetch() {
      try {
        const {data} = await axios.get(`http://localhost:8080/${libraryOwner}/library`);
        const out = data.reduce((a, v) => {
          if(a[v.title]) {
            a[v.title].author = [a[v.title].author, v.author].join(', ')
          } else {
            a[v.title] = v
          }
          return a
        }, {});
        setLibrary({data: Object.values(out)});
      } catch (err) {
        console.log('error', err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetch();
  }, [fetchTrigger])

  return (
    <>
      {!isLoading ?
      <>
      <p></p>
      <h5>MY SHELF ({library.data.length})</h5>
      <hr />
      <Row xs={1} md={2}>
        {library.data.map((b, i) => (
          <BookCard key={i} b={b} />
        ))}
      </Row>
      </>
      : null}
    </>
  );
}

export default Shelf;