import React from "react";
import { useState, useEffect } from 'react'
import BorrowedSingle from './borrowedSingle.jsx';
import Button from 'react-bootstrap/Button';

import { Accordion } from "react-bootstrap";

var BorrowedList = (props) => {
  let books = props.borrow;

  useEffect(() => {
    BorrowedList;
  }, [props])

  var index = 0;
  let borrowedBoundary = (array) => {
    if (array.length < 1) {
      return (
        <div>You currently have no books borrowed</div>
      )
    } else {
      return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Return Date</th>
              </tr>
            </thead>
            {books.map(book => (
              <BorrowedSingle data={book} key={index += 1} />
            ))}
          </table>
        </div>
      )
    }
  }

  return borrowedBoundary(books);
}

export default BorrowedList;