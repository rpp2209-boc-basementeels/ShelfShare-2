import React from "react";

var BorrowedList = (props) => {
  return (
    <li>{props.data.name} {props.data.author}</li>
  )
}

export default BorrowedList;