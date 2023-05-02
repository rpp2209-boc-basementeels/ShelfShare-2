import React from "react";
import BorrowedList from './borrowedList.jsx';

var Borrowed = (props) => {
  var index = 0;
  return (
    <div>Borrowed
      {props.data.map(book => (
        <BorrowedList data={book} key={index+=1}/>
      ))}
      <button onClick={props.func}>🔽</button>
    </div>
  )
}

export default Borrowed;