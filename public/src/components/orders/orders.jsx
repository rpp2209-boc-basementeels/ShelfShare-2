import React from "react";
import Borrowed from './borrowed.jsx';
import Loaned from './loaned.jsx';
import Pending from './pending.jsx';
import Data from './dummyData.js';


var Orders = () => {

  let expand = () => {
    alert('YAY!');
  }

  let sieve = (condition, info) => (
    info.filter(book => book.status === condition)
  )

  let pending = (info) => {
    console.log(info)
  }

  return (
    <div>
      <Borrowed func={expand} data={sieve('borrowed', Data)}/>
      <Loaned func={expand} data={sieve('loaned', Data)}/>
      <Pending func={expand} data={Data}typeSort={pending}/>
    </div>
  )
}

export default Orders;