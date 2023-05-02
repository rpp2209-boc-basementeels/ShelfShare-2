import React from "react";
import PendingList from './pendingList.jsx'

var Pending = (props) => {
  var index = 0;
  let pendings = props.data.filter((book) => {
    return book.pending === true;
  })
  return (
    <div>Pending
      {props.data.map(book => {
        if (book.pending === true) {
          return <PendingList data={book} key={index += 1} />
        }

      })}
      <button onClick={props.func}>🔽</button>
    </div>
  )
}

export default Pending;