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
              <BorrowedSingle data={book} key={index += 1} />
            ))}
          </table>
        </div>
        :
        <div>You currently have no books borrowed</div>}</div>
  )
}

export default BorrowedList;