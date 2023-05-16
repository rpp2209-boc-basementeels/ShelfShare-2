import React from "react";

var LoanedSingle = (props) => {
  return (
    <tbody>
      <tr>
        <td className="p-2">{props.data.details[0].title}</td>
        <td className="p-2">{props.data.details[0].author}</td>
        <td className="p-2">{props.data.return_date}</td>
      </tr>
    </tbody>
  )
}

export default LoanedSingle;