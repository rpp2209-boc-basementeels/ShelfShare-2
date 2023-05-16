import React, { useEffect} from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

var PendingSingle = (props) => {
  var type = props.data.type;
  let book_id = props.data.details[0].book_id;

  let pendingClick = (input) => {
    if (input === 'Loaned') {
      axios.patch('pending/loan', {user_id: props.user, book_id: book_id})
      .catch(err => console.log(err))
    }
    else if (input === 'Borrowed') {
      axios.patch('pending/borrow', {user_id: props.user, book_id: book_id})
      .catch(err => console.log(err))
    }
  }

  return (
    <tbody>
      <tr>
        <td className="p-2">{props.data.details[0].title}</td>
        <td className="p-2">{props.data.details[0].author}</td>
        <td className="p-2">{type}</td>
        <td className="p-2"><Button onClick={(e) => {
          e.preventDefault();
          pendingClick(type);
          alert('Order Confirmed!')
          window.location.reload(false);
        }}>Confirm</Button></td>
      </tr>
    </tbody>
  )
}

export default PendingSingle;