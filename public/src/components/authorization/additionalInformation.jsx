import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

// Error messages
const ageError = 'Please enter numbers only.';
const otherGenderMessage = 'Please enter your gender.'
const usernameExistMessage = 'Username already exists. Please pick a different one!';
const libraryError = 'Please indicate if you are a library or not.'
const usernameError = 'Please enter in a username.'

const AdditionalInformation = (props) => {
  const [username, setUsername] = useState('');
  const [usernameEmpty, setUsernameEmpty] = useState(false);
  const [genderSelection, setGenderSelection] = useState('');
  const [otherGender, setOtherGender] = useState('');
  const [age, setAge] = useState('');
  const [showAgeError, setShowAgeError] = useState(false);
  const [showOtherGenderInput, setShowOtherGenderInput] = useState(false);
  const [usernameExist, setUsernameExist] = useState(false);
  const [isLibrary, setIsLibrary] = useState('');
  const [isLibraryError, setIsLibraryError] = useState(false);

  // Submitting
  const handleAdditionalSubmit = (event) => {
    event.preventDefault();

    if (username === '' || isLibrary === '') {
      username === '' ? setUsernameEmpty(true) : null;
      isLibrary === '' ? setIsLibraryError(true) : null;
    } else {

      axios.get('/username', { params: { username: username } })
        .then(data => {
          if (data.data.length === 0) { // username does not exist
            if (isLibrary === '') {
              setIsLibraryError(true);
            } else {
              // Check the gender
              let gender;
              if (genderSelection === '') {
                gender = 'Undisclosed';
              } else if (genderSelection === 'Other') {
                if (otherGender === '') {
                  gender = 'Undisclosed';
                } else {
                  gender = otherGender;
                }
              } else {
                gender = genderSelection;
              }


              const user = {
                first_name: props.currentUser.given_name,
                last_name: props.currentUser.family_name,
                photo_url: props.currentUser.picture,
                email: props.currentUser.email,
                gender: gender.trim().toLowerCase(),
                age: age !== '' ? age : -1,
                username: username.trim().toLowerCase(),
                is_library: isLibrary === 'Yes' ? true : false,
              };

              axios.post('/newUser', user)
                .then(data => {
                  props.setUser(user);
                  axios.get('/')
                    .then((data) => {
                      props.setClickedLogin(false);
                    })
                    .catch(() => { });
                }) // then send back to homepage
                .catch(err => console.log(err));

            }
          } else { // username exists, choose a different one
            setUsernameExist(true);
            if (isLibrary === '') {
              setIsLibraryError(true);
            }
          }
        })
        .catch(err => console.log(err));
    }
  };

  useEffect(() => {
    if (genderSelection === 'Other') {
      setShowOtherGenderInput(true);
    } else {
      setShowOtherGenderInput(false);
    }
  }, [genderSelection])

  // Genders
  const genderOptions = () => {
    const options = [
      '',
      'Male',
      'Female',
      'Other',
      'Undisclosed'
    ];

    return (
      <Form.Group>
        <Form.Label>Gender</Form.Label>
        <Form.Control as='select' value={genderSelection} onChange={handleGenderSelectionChange}>
          {options.map((value) =>
            <option value={value} key={value}>{value}</option>
          )}
        </Form.Control>
        {showOtherGenderInput ? otherGenderElements() : null}
      </Form.Group>
    )
  };

  const otherGenderElements = () => {
    return (
      <Form.Group>
        <Form.Label>Other Gender</Form.Label>
        <Form.Control type='text' placeholder='Enter gender' value={otherGender} onChange={handleOtherGenderChange} />
      </Form.Group>
    )
  };

  // Library
  const userIsALibrary = () => {
    const options = [
      '',
      'Yes',
      'No',
    ];

    return (
      <Form.Group>
        <Form.Label>Are you a library</Form.Label>
        <Form.Control as='select' value={isLibrary} onChange={handleLibraryChange}>
          {options.map((value) =>
            <option value={value} key={value}>{value}</option>
          )}
        </Form.Control>
      </Form.Group>
    )
  };

  // Handling errors
  const allErrors = () => {
    return (
      <ul>
        {usernameEmpty ? <li>{usernameError}</li> : null}
        {showAgeError ? <li>{ageError}</li> : null}
        {showOtherGenderInput ? <li>{otherGenderMessage}</li> : null}
        {isLibraryError ? <li>{libraryError}</li> : null}
        {usernameExist ? <li>{usernameExistMessage}</li> : null}
      </ul>
    )
  };

  // Handle change
  const handleAgeChange = (event) => {
    if (Number(event.target.value) || event.target.value === '') {
      setAge(event.target.value);
      if (showAgeError) { setShowAgeError(false); }
    } else {
      setShowAgeError(true);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleGenderSelectionChange = (event) => {
    setGenderSelection(event.target.value);
  };

  const handleOtherGenderChange = (event) => {
    setOtherGender(event.target.value);
  };

  const handleCancelButton = () => {
    // Go back to home page
    props.setClickedLogin(false);
  };

  const userGreeting = () => {
    return (
      <>
        Greetings {props.currentUser.given_name}! Please enter the following information.
      </>
    )
  };

  const handleLibraryChange = (event) => {
    setIsLibrary(event.target.value);
    if (event.target.value !== '') {
      setIsLibraryError(false);
    }
  };

  return (
    <Container fluid='sm'>
      <Form onSubmit={handleAdditionalSubmit}>
        {userGreeting()}
        {allErrors()}
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type='text' placeholder='Enter username' value={username} onChange={handleUsernameChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control type='text' placeholder='Enter age' value={age} onChange={handleAgeChange} />
        </Form.Group>

        {genderOptions()}
        {userIsALibrary()}
        <button id='cancel' name='cancel' onClick={handleCancelButton}>Cancel</button>
        <input type='submit' id='submit' name='submit' value='Submit'></input>
      </Form>
    </Container>
  )
};

export default AdditionalInformation;