import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

var PendingSingle = (props) => {

  let book_id = props.data.details[0].book_id;
  var owner = props.data.owner_id;
  var user = props.user;

  let typeCheck = () => {
    if (user === owner) { return 'Loaned'; }
    else { return 'Borrowed'; }
  }

  let pendingClick = () => {
    if (user === owner) {
      axios.patch('pending/loan', {user_id: props.user, book_id: book_id})
      .catch(err => console.log(err))
    }
    else if (user !== owner) {
      axios.patch('pending/borrow', {user_id: props.user, book_id: book_id})
      .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    PendingSingle;
  }, [props])


  return (
      <tbody>
      <tr>
        <td className="p-2">{props.data.details[0].title}</td>
        <td className="p-2">{props.data.details[0].author}</td>
        <td className="p-2">{typeCheck()}</td>
        <td className="p-2"><Button onClick={(e) => {
          e.preventDefault();
          pendingClick();
          alert('Order Confirmed!')
          props.state(true)
        }}>Confirm</Button></td>
      </tr>
    </tbody>
  )
}

export default PendingSingle;