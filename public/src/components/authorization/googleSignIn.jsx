import React, { useState, useEffect } from 'react';
import jwt from 'jwt-decode';
import AdditionalInformation from './additionalInformation.jsx';
import axios from 'axios';

const GoogleSignIn = () => {
  const [currentUser, setCurrentUser] = useState({}); // may want this on the homepage
  const [nextPage, setNextPage] = useState(false);

  const handleGoogleCallback = (res) => {
    let user = jwt(res.credential);
    console.log(user);
    setCurrentUser(user);
    let email = {email: user.email};

    // check database for user based on email
    axios.get('/email', { params: email })
      .then(data => {
        if (data.data.length === 0) { // if user does not exist
          setNextPage(true);
        } else { // user exists, but since authentication didn't work in the homepage, must update hash
          axios.patch('/updateSaltHash', email)
            .then(data => console.log(data))
            .catch(err => console.log(err));
        }
      })
  };

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

  const firstPage = () => {
    return (
      <>
        Sign In or Sign Up With Google
        <div id='signInButton'></div>
      </>
    )
  };

  const secondPage = () => {
    return ( <AdditionalInformation currentUser={currentUser}/> )
  };

  return nextPage ? secondPage() : firstPage();
};

export default GoogleSignIn;