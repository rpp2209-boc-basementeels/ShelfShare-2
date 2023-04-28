import React, { useState, useEffect } from 'react';
import jwt from 'jwt-decode';

const GoogleSignIn = () => {
  const [currentUser, setCurrentUser] = useState({}); // may want this on the homepage

  const handleGoogleCallback = (res) => {
    let user = jwt(res.credential);
    setCurrentUser(user);
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: '224060013296-48ur0re7e554bogpi72ognroljj0ktg7.apps.googleusercontent.com',
      callback: handleGoogleCallback
    })

    google.accounts.id.renderButton(
      document.getElementById('signInButton'),
      { theme: 'outline', size: 'large' }
    )
  }, [])

  return (
    <>
      Sign In or Sign Up With Google
      <div id='signInButton'></div>
    </>
  )
};

export default GoogleSignIn;