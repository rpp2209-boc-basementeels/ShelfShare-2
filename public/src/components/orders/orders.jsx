import React, { useState, useEffect } from 'react';
import BorrowedList from './borrowedList.jsx';
import LoanedList from './loanedList.jsx';
import PendingList from './pendingList.jsx';
import Data from './dummyData.js';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';

var Orders = (props) => {
  const [loan, setLoan] = useState([])
  const [borrow, setBorrow] = useState([])
  const [pend, setPend] = useState([])

  let testUser = 7;

  let fetcher = () => {
    axios.get(`orders/${testUser}`)
    .then(data => {
      setLoan(data.data.loaned);
      setBorrow(data.data.borrowed);
      setPend(data.data.pending);
    })
    .catch(err => console.log('err in orders', err));
}

  let sieve = (condition, info) => (
    info.filter(book => book.status === condition && book.pending === false)
  )

  let pending = (info) => {
    var filtered = [];
    info.forEach(book => {
      if (book.pending === true) {
        if (book.status === 'borrowed') { book.status = 'Return'; }
        else { book.status = 'Loaned'; }
        filtered.push(book)
      }
    })
    return filtered;
  }

  useEffect(() => {
    fetcher();
  }, [props])


  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Borrowed Books</Accordion.Header>
        <Accordion.Body>
          <BorrowedList borrow={borrow}/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Loaned Books</Accordion.Header>
        <Accordion.Body>
          <LoanedList loan={loan}/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Pending</Accordion.Header>
        <Accordion.Body>
          <PendingList data={pending(Data)} pending={pend}/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Orders;