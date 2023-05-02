import React from "react";
import PendingList from './pendingList.jsx'

var Pending = (props) => {
  var index = 0;
  return (
    <div>Pending
      {props.data.map(book => {
          return <PendingList data={book} key={index += 1} />
      })}
      <button>🔽</button>
    </div>
  )
}

export default Pending;