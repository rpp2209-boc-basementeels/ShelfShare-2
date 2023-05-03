import React from "react";
import LoanedSingle from './loanedSingle.jsx'
import { useState, useEffect } from 'react';

var LoanedList = (props) => {
  const [clicked, setClick] = useState(false);

  var arrow = () => {
    if (clicked) { return '🔼' }
    else { return '🔽' }
  }


  useEffect(() => {
    LoanedList;
    arrow;
  }, [clicked])

  var index = 0;
  return (
    <div > Loaned
      <button onClick={(e) => {
        e.preventDefault();
        setClick(!clicked);
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
              <LoanedSingle data={book} key={index += 1} />
            ))}
          </table>
        </div>
        :
        null}
    </div>
  )
}


export default LoanedList;