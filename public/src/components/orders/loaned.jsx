import React from "react";
import LoanedList from './loanedList.jsx'

var Loaned = (props) => {
  var index = 0;
  return (
    <div>Loaned
      {props.data.map(book => (
        <LoanedList data={book} key={index+=1}/>
      ))}
      <button onClick={props.func}>🔽</button>
    </div>
  )
}


export default Loaned;