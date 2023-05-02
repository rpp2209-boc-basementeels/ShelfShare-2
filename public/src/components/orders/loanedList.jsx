import React from "react";

var LoanedList = (props) => {
  return (
    <li>{props.data.name} {props.data.author}</li>
  )
}

export default LoanedList;