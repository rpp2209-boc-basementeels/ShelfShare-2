import React from "react";
import Button from 'react-bootstrap/Button';

var PendingSingle = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.data.status}</td>
        <td>{props.data.name}</td>
        <td><Button onClick={props.func}>Confirm</Button></td>
      </tr>
    </tbody>
  )
}

export default PendingSingle;