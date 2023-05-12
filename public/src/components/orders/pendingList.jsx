import React from "react";
import PendingSingle from './pendingSingle.jsx'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

var PendingList = (props) => {

  let books = props.pending;

  var index = 0;
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

export default PendingList;