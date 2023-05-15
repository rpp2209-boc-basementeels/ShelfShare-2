import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import BookCard from './BookCard.jsx';

const Borrowed = ({ libraryOwner }) => {
  const [borrowed, setBorrowed] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetch() {
      try {
        const {data} = await axios.get(`http://localhost:3000/${libraryOwner}/borrowed`);
        const out = data.reduce((a, v) => {
          if(a[v.title]) {
            a[v.title].author = [a[v.title].author, v.author].join(', ')
          } else {
            a[v.title] = v
          }
          return a
        }, {});
        setBorrowed({data: Object.values(out)});
      } catch (err) {
        console.log('error',err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetch();
  }, [])

  return (
    <>
      {borrowed.data ?
      <>
      <p></p>
      <h5>BORROWED BOOKS ({borrowed.data.length})</h5>
      <hr />
      <Row xs={1} md={2}>
        {borrowed.data.map((b, i) => (
          <BookCard key={i} b={b} />
        ))}
      </Row>
      </>
      : null}
    </>
  );
};

export default Borrowed;