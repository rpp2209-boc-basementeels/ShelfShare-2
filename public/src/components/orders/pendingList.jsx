import React from "react";

var PendingList = (props) => (
  <li>{props.data.status} {props.data.name}</li>
)

export default PendingList;