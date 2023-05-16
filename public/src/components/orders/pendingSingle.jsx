import React from "react";
import Button from 'react-bootstrap/Button';

var PendingSingle = (props) => {
  return (
    <tbody>
      <tr>
        <td className="p-2">{props.data.details[0].title}</td>
        <td className="p-2">{props.data.details[0].author}</td>
        <td className="p-2">{props.data.type}</td>
        <td className="p-2"><Button onClick={props.func}>Confirm</Button></td>
      </tr>
    </tbody>
  )
}

export default PendingSingle;