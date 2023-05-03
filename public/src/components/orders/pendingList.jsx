import React from "react";

var PendingList = (props) => {
  return (
    <li>{props.data.status} {props.data.name}</li>
  )
}

export default PendingList;