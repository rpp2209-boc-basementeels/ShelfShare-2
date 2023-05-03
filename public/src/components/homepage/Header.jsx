import React, { useState, useEffect } from 'react';
import GoogleSignIn from '../authorization/googleSignIn.jsx';
import AdditionalInformation from '../authorization/additionalInformation.jsx';

const Header = () => {
  //conditional rendering of Gallery or Detail

  return (
    <div>
      <GoogleSignIn />
      <h1>ShelfShare!</h1>
      <div className="container-md border">This is the Header Component</div>

    </div>

  )
}

  export default Header;