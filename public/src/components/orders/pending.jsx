import React from "react";
import PendingList from './pendingList.jsx'
import { useState, useEffect } from 'react';

var Pending = (props) => {
  const [clicked, setClick] = useState(false);

  var arrow = () => {
    if (clicked) { return '🔼' }
    else { return '🔽' }
  }


  useEffect(() => {
    Pending;
    arrow;
  }, [clicked])

  var index = 0;
  return (
    <div > Pending
      <button onClick={(e) => {
        e.preventDefault();
        console.log(clicked)
        setClick(!clicked)
      }}>{arrow()}</button>
      {clicked ?
        <div>
          {props.data.map(book => (
            <PendingList data={book} key={index += 1} />
          ))}
        </div>
        :
        null}
    </div>
  )
}

export default Pending;