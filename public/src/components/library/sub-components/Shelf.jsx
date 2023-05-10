import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Shelf = ({ scanResults, fetchTrigger, libraryOwner, loggedInUser }) => {
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
        console.log('error',err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetch();
  }, [fetchTrigger])

  return (
    <div>
      {!isLoading ?
      <div className='Result-container'>
      <div className='Result-header'>My Shelf ({library.data.length})</div>
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
            library.data.map((result, i) => {
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td><img src={result.image_url}/></td>
                  <td>{result.title}</td>
                  <td>
                    {result.author}
                  </td>
                  <td>{result.isbn}</td>
                </tr>
                );
            })
          }
          </tbody>
        </table>
        </div>
        </div>
      : null}
    </div>
  );
}

export default Shelf;