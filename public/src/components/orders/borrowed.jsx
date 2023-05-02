import React from "react";
import { useState } from 'react'
import BorrowedList from './borrowedList.jsx';

var Borrowed = (props) => {

  const [clicked, setClick] = useState(false);


  var index = 0;
  return (
    <div>Borrowed
      {props.data.map(book => (
        <BorrowedList data={book} key={index+=1}/>
      ))}
      <button onClick={setClick(!clicked)}>🔽</button>
    </div>
  )
}

export default Borrowed;