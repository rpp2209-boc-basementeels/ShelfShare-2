import React from "react";
import BorrowedList from './borrowedList.jsx';
import LoanedList from './loanedList.jsx';
import PendingList from './pendingList.jsx';
import Data from './dummyData.js';
import Accordion from 'react-bootstrap/Accordion';

var Orders = () => {

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


  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Borrowed Books</Accordion.Header>
        <Accordion.Body>
          <BorrowedList data={sieve('borrowed', Data)} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Loaned Books</Accordion.Header>
        <Accordion.Body>
          <LoanedList data={sieve('loaned', Data)} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Pending</Accordion.Header>
        <Accordion.Body>
          <PendingList data={pending(Data)} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Orders;