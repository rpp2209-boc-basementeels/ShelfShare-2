import React from "react";

var BorrowedSingle = (props) => {
  return (
    <li>{props.data.name} {props.data.author}</li>
  )
}

export default BorrowedSingle;