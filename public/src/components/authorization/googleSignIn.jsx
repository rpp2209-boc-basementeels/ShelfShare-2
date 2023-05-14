import React, { useState, useEffect } from 'react';
import jwt from 'jwt-decode';
import AdditionalInformation from './additionalInformation.jsx';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import googleCSS from './googleAndDemo.css';

const GoogleSignIn = (props) => {
  const [currentUser, setCurrentUser] = useState({}); // may want this on the homepage
  const [nextPage, setNextPage] = useState(false);

  const handleGoogleCallback = (res) => {
    let user = jwt(res.credential);
    setCurrentUser(user);
    let email = { email: user.email };

    // check database for user based on email
    axios.get(`http://localhost:3000/email`, { params: email })
      .then(data => {
        if (data.data.length === 0) { // if user does not exist
          setNextPage(true);
        } else { // user exists, but since authentication didn't work in the homepage, must update hash
          axios.put(`http://localhost:3000/updateHash`, email)
            .then(() => {
              props.setClickedLogin(false);
              props.setUser(data.data[0]);
            })
            .catch(() => { });
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
      <div className='google-container'>
        <div className='google-sign-in'>
          <label className='google-label'>Sign In or Sign Up With Google</label>
          <div id='signInButton'></div>
        </div>
      </div>
    )
  };

  const secondPage = () => {
    return (<AdditionalInformation currentUser={currentUser} setUser={props.setUser} setClickedLogin={props.setClickedLogin} />);
  };

  return nextPage ? secondPage() : firstPage();
};

export default GoogleSignIn;