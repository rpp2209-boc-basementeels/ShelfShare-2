import React from "react";
import LoanedSingle from './loanedSingle.jsx'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

var LoanedList = (props) => {
  var index = 0;
  return (
    <div>
      {props.data.map(book => (
        <LoanedSingle data={book} key={index += 1} />
      ))}
    </div>
  )
}


export default LoanedList;