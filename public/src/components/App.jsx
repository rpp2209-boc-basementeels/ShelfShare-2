import React, { useState, useEffect } from 'react';
import Orders from './orders/orders.jsx';
import GoogleSignIn from './authorization/googleSignIn.jsx'

const App = () => {
  //conditional rendering of Gallery or Detail

  return (
    <div>
      {/* <GoogleSignIn /> */}
      <Orders />
    </div>
  )
}

export default App;