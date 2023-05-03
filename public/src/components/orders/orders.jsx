import React from "react";
import BorrowedList from './borrowedList.jsx';
import LoanedList from './loanedList.jsx';
import PendingList from './pendingList.jsx';
import Data from './dummyData.js';


var Orders = () => {

  let sieve = (condition, info) => (
    info.filter(book => book.status === condition && book.pending === false)
  )

  let pending = (info) => {
    var filtered = [];
    info.forEach(book => {
      if (book.pending === true) {
        if (book.status === 'borrowed') { book.status = 'Return'; }
        else {book.status = 'Loaned'; }
        filtered.push(book)
      }
    })
    return filtered;
  }


  return (
    <div> My Orders
      <BorrowedList data={sieve('borrowed', Data)}/>
      <LoanedList data={sieve('loaned', Data)}/>
      <PendingList data={pending(Data)}/>
    </div>
  )
}

export default Orders;