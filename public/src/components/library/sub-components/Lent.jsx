import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import BookCard from './BookCard.jsx';

const Lent = ({ user }) => {
  const [lent, setLent] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetch() {
      try {
        const {data} = await axios.get(`/${user.username}/lent`);
        const out = data.reduce((a, v) => {
          if(a[v.title]) {
            a[v.title].author = [a[v.title].author, v.author].join(', ')
          } else {
            a[v.title] = v
          }
          return a
        }, {});
        setLent({data: Object.values(out)});
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
      {lent.data ?
      <>
        <p></p>
        <h5>LENT BOOKS ({lent.data.length})</h5>
        <hr />
        <Row xs='auto'>
          {lent.data.map((b, i) => (
            <BookCard key={i} b={b} />
          ))}
        </Row>
      </>
      : null}
    </>
  );
};

export default Lent;