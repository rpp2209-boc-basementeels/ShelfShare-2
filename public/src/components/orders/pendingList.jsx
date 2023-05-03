import React from "react";
import PendingSingle from './pendingSingle.jsx'
import { useState, useEffect } from 'react';

var PendingList = (props) => {
  const [clicked, setClick] = useState(false);

  var arrow = () => {
    if (clicked) { return '🔼' }
    else { return '🔽' }
  }


  useEffect(() => {
    PendingList;
    arrow;
  }, [clicked])

  var index = 0;
  return (
    <div > Pending
      <button onClick={(e) => {
        e.preventDefault();
        setClick(!clicked);
      }}>{arrow()}</button>
      {clicked ?
        <div>
          {props.data.map(book => (
            <PendingSingle data={book} key={index += 1} />
          ))}
        </div>
        :
        null}
    </div>
  )
}

export default PendingList;