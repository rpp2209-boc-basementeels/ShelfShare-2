import React from "react";

var PendingSingle = (props) => {
  return (
    <li>{props.data.status} {props.data.name}</li>
  )
}

export default PendingSingle;