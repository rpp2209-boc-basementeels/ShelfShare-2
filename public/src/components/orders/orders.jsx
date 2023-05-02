import React from "react";
import Borrowed from './borrowed.jsx';
import Loaned from './loaned.jsx';
import Pending from './pending.jsx';
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
    <div>
      <Borrowed data={sieve('borrowed', Data)}/>
      <Loaned data={sieve('loaned', Data)}/>
      <Pending data={pending(Data)}/>
    </div>
  )
}

export default Orders;