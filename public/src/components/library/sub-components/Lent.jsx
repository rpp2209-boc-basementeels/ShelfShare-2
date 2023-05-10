import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import BookCard from './BookCard.jsx'

const Lent = ({ libraryOwner }) => {
  const [lent, setLent] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetch() {
      try {
        const {data} = await axios.get(`http://localhost:8080/${libraryOwner}/lent`);
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
    <div>
      {lent.data ?
      <div className='Result-container'>
      <div className='Result-header'>Lent Books ({lent.data.length})</div>
        <Row xs={1} md={2} className="g-4">
        {lent.data.map((b, i) => (
          <BookCard key={i} b={b} />
        ))}
        </Row>
      </div>
      : null}
    </div>
  );
};

export default Lent;