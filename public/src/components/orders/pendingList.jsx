import React from "react";
import PendingSingle from './pendingSingle.jsx'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

var PendingList = (props) => {

  let books = props.pending;

  useEffect(() => {
    PendingList;
  }, [props])

  var flattener = () => (
    Object.values(books).flat()
  )

  var index = 0;

  return (
    <div>{
      flattener().length > 0 ?
        <div>
          <table>
            <thead>
              <tr>
                <th className="p-2">Title</th>
                <th className="p-2">Author</th>
                <th className="p-2">Type</th>
              </tr>
            </thead>
            {flattener().map(book => (
              <PendingSingle data={book} key={index += 1} user={props.user} state={props.state}/>
            ))}
          </table>
        </div>
        :
        <div>You currently have no orders pending </div>}</div>
  )
}

export default PendingList;