import React, { useState, useEffect } from 'react';
import jwt from 'jwt-decode';
import AdditionalInformation from './additionalInformation.jsx';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

const GoogleSignIn = (props) => {
  const [currentUser, setCurrentUser] = useState({}); // may want this on the homepage
  const [nextPage, setNextPage] = useState(false);

  const handleGoogleCallback = (res) => {
    let user = jwt(res.credential);
    setCurrentUser(user);
    let email = { email: user.email };

    // check database for user based on email
    axios.get('/email', { params: email })
      .then(data => {
        if (data.data.length === 0) { // if user does not exist
          setNextPage(true);
        } else { // user exists, but since authentication didn't work in the homepage, must update hash
          axios.patch('/updateSaltHash', email)
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
      <Container fluid='xxl'>
        <Row className='justify-content-center'>
          <Stack>
            Sign In or Sign Up With Google
            <Row id='signInButton' className='justify-content-center'></Row>
            </Stack>
        </Row>
      </Container>
    )
  };

const secondPage = () => {
  return (<AdditionalInformation currentUser={currentUser} setUser={props.setUser} setClickedLogin={props.setClickedLogin} />);
};

return nextPage ? secondPage() : firstPage();
};

export default GoogleSignIn;