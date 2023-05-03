import React from "react";
import { useState, useEffect } from 'react'
import BorrowedList from './borrowedList.jsx';

var Borrowed = (props) => {

  const [clicked, setClick] = useState(false);

  var arrow = () => {
    if (clicked) { return '🔼' }
    else { return '🔽' }
  }


  useEffect(() => {
    Borrowed;
    arrow;
  }, [clicked])

  var index = 0;
  return (
    <div > Borrowed
      <button onClick={(e) => {
        e.preventDefault();
        setClick(!clicked)
      }}>{arrow()}</button>
      {clicked ?
        <div>
          {props.data.map(book => (
            <BorrowedList data={book} key={index += 1} />
          ))}
        </div>
        :
        null}
    </div>
  )
}

export default Borrowed;