import React, { useEffect, useState } from 'react';

const ResultContainerTable = ({ data }) => {
//   const results = filterResults(data);
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
        data.map((result, i) => {
          return (
            <tr key={i + 1}>
              <td>{i + 1}</td>
              <td><img src={result.image_url_small}/></td>
              <td>{result.title}</td>
              <td>
                {result.authors.map((author, i) => {
                  if (i < result.authors.length - 1) {
                    return author + ', ';
                  } else {
                    return author;
                  }
                })}
              </td>
              <td>{result.ISBN}</td>
            </tr>
            );
        })
      }
      </tbody>
    </table>
    );
};

const ScanResults = (props) => {
  const [results, saveResults] = useState([]);
  useEffect(() => {
    saveResults(props.results)
  }, [JSON.stringify(props.results)]);

  return (
    <div className='Result-container'>
    <div className='Result-header'>Scanned Books ({results.length})</div>
    <div className='Result-section'>
      <ResultContainerTable data={results} />
    </div>
    </div>
  );
};

export default ScanResults;
