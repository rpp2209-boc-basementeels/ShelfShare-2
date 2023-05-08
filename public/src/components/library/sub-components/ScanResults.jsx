import React from 'react';

function filterResults (results) {
  let filteredResults = [];
  for (var i = 0; i < results.length; ++i) {
    if (i === 0) {
      filteredResults.push(results[i]);
      continue;
    }
    if (results[i].decodedText !== results[i - 1].decodedText) {
      filteredResults.push(results[i]);
    }
  }
  return filteredResults;
}

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
  console.log('scanresults:', props.results)
  const results = filterResults(props.results);
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
