import React from "react";
import { useState, useEffect } from 'react'
import BorrowedSingle from './borrowedSingle.jsx';

var BorrowedList = (props) => {

  const [clicked, setClick] = useState(false);

  var arrow = () => {
    if (clicked) { return '🔼' }
    else { return '🔽' }
  }


  useEffect(() => {
    BorrowedList;
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
            <BorrowedSingle data={book} key={index += 1} />
          ))}
        </div>
        :
        null}
    </div>
  )
}

export default BorrowedList;