import React from "react";
import LoanedSingle from './loanedSingle.jsx'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

var LoanedList = (props) => {
  let books = props.loan;
  var index = 0;

  useEffect(() => {
    LoanedList;
  }, [props])

  var index = 0;

  let loanedBoundary = (array) => {
    if (array.length < 1) {
      return (
        <div>You currently have no books loaned</div>
      )
    } else {
      return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
              </tr>
            </thead>
            {books.map(book => (
              <LoanedSingle data={book} key={index += 1} />
            ))}
          </table>
        </div>
      )
    }
  }

  return loanedBoundary(books);
}


export default LoanedList;