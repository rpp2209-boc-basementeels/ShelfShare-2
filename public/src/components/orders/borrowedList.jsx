import React from "react";
import { useState, useEffect } from 'react'
import BorrowedSingle from './borrowedSingle.jsx';
import Button from 'react-bootstrap/Button';

import { Accordion } from "react-bootstrap";

var BorrowedList = (props) => {


  var index = 0;
  return (
    <div>
      {props.data.map(book => (
        <BorrowedSingle data={book} key={index += 1} />
      ))}
    </div>
  )
}

export default BorrowedList;