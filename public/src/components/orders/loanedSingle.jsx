import React from "react";

var LoanedSingle = (props) => {
  return (
    <li>{props.data.name} {props.data.author}</li>
  )
}

export default LoanedSingle;