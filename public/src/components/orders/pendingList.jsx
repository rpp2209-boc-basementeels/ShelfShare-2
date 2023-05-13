import React from "react";
import PendingSingle from './pendingSingle.jsx'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

var PendingList = (props) => {

  let books = props.pending;
  console.log(books)

  useEffect(() => {
    PendingList;
  }, [props])

  var index = 0;

  let pendingBoundary = (array) => {
    if (array.length < 1) {
      return (
        <div>You currently have no orders pending</div>
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
            <PendingSingle data={book} key={index += 1} />
          ))}
        </table>
      </div>
      )
    }
  }

  return pendingBoundary(books);
}

export default PendingList;