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

  return (
    <div>{
      books.length > 0 ?
        <div>
          <table>
            <thead>
              <tr>
                <th className="p-2">Title</th>
                <th className="p-2">Author</th>
                <th className="p-2">Return Date</th>
              </tr>
            </thead>
            {books.map(book => (
              <LoanedSingle data={book} key={index += 1} />
            ))}
          </table>
        </div>
        :
        <div>You currently have no books loaned</div>}</div>
  )
}


export default LoanedList;