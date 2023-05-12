import React from "react";
import LoanedSingle from './loanedSingle.jsx'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

var LoanedList = (props) => {
  let books = props.loan;
  var index = 0;
  console.log('ll', props)

  useEffect(() => {
    LoanedList;
  }, [props])

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


export default LoanedList;