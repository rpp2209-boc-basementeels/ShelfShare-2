import React from "react";

var BorrowedSingle = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.data.name}</td>
        <td>{props.data.author}</td>
      </tr>
    </tbody>
  )
}

export default BorrowedSingle;