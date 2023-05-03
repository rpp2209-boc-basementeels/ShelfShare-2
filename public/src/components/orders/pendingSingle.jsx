import React from "react";

var PendingSingle = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.data.status}</td>
        <td>{props.data.name}</td>
        <td><button onClick={props.func}>Confirm</button></td>
      </tr>
    </tbody>
  )
}

export default PendingSingle;