import React from 'react';

function filterResults (results) {
  let filteredResults = [];
  for (var i = 0; i < results.length; ++i) {
    if (i === 0) {
      filteredResults.push(results[i]);
      continue;
    }

    if (results[i].ISBN !== results[i - 1].ISBN) {
      filteredResults.push(results[i]);
    }
  }
  return filteredResults;
}

const ResultContainerTable = ({results}) => {
  const result = filterResults(results);
  return (
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
        result.map((book, i) => {
          return (
            <tr key={i + 1}>
              <td>{i + 1}</td>
              <td><img src={book.image_url}/></td>
              <td>{book.title}</td>
              <td>
                {book.authors.map((author, i) => {
                  if (i < book.authors.length - 1) {
                    return author + ', ';
                  } else {
                    return author;
                  }
                })}
              </td>
              <td>{book.ISBN}</td>
            </tr>
            );
        })
      }
      </tbody>
    </table>
    );
};

const ScanResults = ({ results }) => {
  return (
    <div className='Result-container'>
      <div className='Result-header'>Scanned Books ({results.length})</div>
      <div className='Result-section'>
        <ResultContainerTable results={results} />
      </div>
    </div>
  );
};

export default ScanResults;
