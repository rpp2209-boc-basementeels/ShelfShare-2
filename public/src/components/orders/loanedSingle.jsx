import React from "react";

var LoanedSingle = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.data.name}</td>
        <td>{props.data.author}</td>
      </tr>
    </tbody>
  )
}

export default LoanedSingle;