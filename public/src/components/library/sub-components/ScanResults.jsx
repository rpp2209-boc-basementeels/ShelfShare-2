import React from 'react';
import { Container, Table } from 'react-bootstrap';

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
    <Table striped bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>COVER</th>
          <th>TITLE</th>
          <th>AUTHOR(S)</th>
          <th>ISBN</th>
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
    </Table>
    );
};

const ScanResults = ({ results }) => {
  return (
    <>
      <p></p>
      <h5>SCANNED BOOKS ({results.length})</h5>
      <ResultContainerTable results={results} />
    </>
  );
};

export default ScanResults;
