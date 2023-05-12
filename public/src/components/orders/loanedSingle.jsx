import React from "react";

var LoanedSingle = (props) => {
  return (
    <tbody>
      <tr>
      <td>{props.data.details[0].title}</td>
        <td>{props.data.details[0].author}</td>
        <td>{props.data.return_date}</td>
      </tr>
    </tbody>
  )
}

export default LoanedSingle;