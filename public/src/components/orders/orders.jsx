import React, { useState, useEffect } from 'react';
import BorrowedList from './borrowedList.jsx';
import LoanedList from './loanedList.jsx';
import PendingList from './pendingList.jsx';
import Data from './dummyData.js';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';

var Orders = (props) => {

  let bookData = props.bookData;

  useEffect(() => {
    Orders;
  }, [props])

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Borrowed Books</Accordion.Header>
        <Accordion.Body>
          <BorrowedList borrow={bookData.borrowed}/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Loaned Books</Accordion.Header>
        <Accordion.Body>
          <LoanedList loan={bookData.loaned}/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Pending</Accordion.Header>
        <Accordion.Body>
          <PendingList pending={bookData.pending}/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Orders;