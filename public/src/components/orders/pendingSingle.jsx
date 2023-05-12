import React from "react";
import Button from 'react-bootstrap/Button';

var PendingSingle = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.data.details[0].title}</td>
        <td>{props.data.details[0].author}</td>
        <td><Button onClick={props.func}>Confirm</Button></td>
      </tr>
    </tbody>
  )
}

export default PendingSingle;