import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Shelf = ({ libraryOwner }) => {
  const [shelfBooks, setShelfBooks] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      axios.get(`http://localhost:8080/${libraryOwner}/library`)
      .then((libraryData) => {
        const out = libraryData.data.reduce((a, v) => {
          if(a[v.title]) {
            a[v.title].author = [a[v.title].author, v.author].join(', ')
          } else {
            a[v.title] = v
          }
          return a
        }, {});
        setShelfBooks(Object.values(out));
      })
    };
    dataFetch();
  }, [])

  if (!shelfBooks) return "Loading...";

  return (
    <div className='Result-container'>
      <div className='Result-header'>My Shelf ({shelfBooks.length})</div>
        <div className='Result-section'>
        <table className={'Qrcode-result-table'}>
          <thead>
            <tr>
              <td>#</td>
              <td>Cover</td>
              <td>Title</td>
              <td>Author(s)</td>
              <td>ISBN</td>
            </tr>
          </thead>
          <tbody>
          {
            shelfBooks.map((result, i) => {
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td><img src={result.image_url_small}/></td>
                  <td>{result.title}</td>
                  <td>
                    {result.author}
                  </td>
                  <td>{result.ISBN}</td>
                </tr>
                );
            })
          }
          </tbody>
        </table>
        </div>
    </div>
  );
}

export default Shelf;