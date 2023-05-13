import React from "react";
import PendingSingle from './pendingSingle.jsx'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

var PendingList = (props) => {

  let books = props.pending;
  console.log('pending', books)

  useEffect(() => {
    PendingList;
  }, [props])

  var index = 0;

  return (
    <div>{
      books.length > 0 ?
        <div>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Type</th>
              </tr>
            </thead>
            {books.map(book => (
              <PendingSingle data={book} key={index += 1} />
            ))}
          </table>
        </div>
        :
        <div>You currently have no orders pending </div>}</div>
  )
}

export default PendingList;

/*



  return (
    <div>{
      books.length > 0 ?
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
              <PendingSingle data={book} key={index += 1} />
            ))}
          </table>
        </div>
        :
        <div>You currently have no orders pending/div>}</div>
  )


*/