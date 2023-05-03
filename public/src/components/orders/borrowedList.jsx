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
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
              </tr>
            </thead>
            {props.data.map(book => (
              <BorrowedSingle data={book} key={index += 1} />
            ))}
          </table>
        </div>
        :
        null}
    </div>
  )
}

export default BorrowedList;