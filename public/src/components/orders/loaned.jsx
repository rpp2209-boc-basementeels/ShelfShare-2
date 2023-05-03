import React from "react";
import LoanedList from './loanedList.jsx'
import { useState, useEffect } from 'react';

var Loaned = (props) => {
  const [clicked, setClick] = useState(false);

  var arrow = () => {
    if (clicked) { return '🔼' }
    else { return '🔽' }
  }


  useEffect(() => {
    Loaned;
    arrow;
  }, [clicked])

  var index = 0;
  return (
    <div > Loaned
      <button onClick={(e) => {
        e.preventDefault();
        console.log(clicked)
        setClick(!clicked)
      }}>{arrow()}</button>
      {clicked ?
        <div>
          {props.data.map(book => (
            <LoanedList data={book} key={index += 1} />
          ))}
        </div>
        :
        null}
    </div>
  )
}


export default Loaned;