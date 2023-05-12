import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Error messages
const ageError = 'Please enter numbers only.';
const otherGenderMessage = 'Please enter your gender.'
const usernameExistMessage = 'Username already exists. Please pick a different one!';
const libraryError = 'Please indicate if you are a library or not.'

const AdditionalInformation = (props) => {
  const [username, setUsername] = useState('');
  const [genderSelection, setGenderSelection] = useState('');
  const [otherGender, setOtherGender] = useState('');
  const [age, setAge] = useState('');
  const [showAgeError, setShowAgeError] = useState(false);
  const [showOtherGenderInput, setShowOtherGenderInput] = useState(false);
  const [usernameExist, setUsernameExist] = useState(false);
  const [isLibrary, setIsLibrary] = useState('');
  const [isLibraryError, setIsLibaryError] = useState(false);

  // Submitting
  const handleAdditionalSubmit = (event) => {
    event.preventDefault();

    axios.get('/username', { params: { username: username } })
      .then(data => {
        if (data.data.length === 0) { // username does not exist
          if (isLibrary === '') {
            setIsLibaryError(true);
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
            setIsLibaryError(true);
          }
        }
      })
      .catch(err => console.log(err));
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
      <>
        <label>Gender</label>
        <select onChange={handleGenderSelectionChange}>
          {options.map((value) =>
            <option value={value} key={value}>{value}</option>
          )}
        </select>
        {showOtherGenderInput ? otherGenderElements() : null}
      </>
    )
  };

  const otherGenderElements = () => {
    return (
      <>
        <label>Other Gender</label>
        <input type='text' id='inputOtherGender' name='inputOtherGender' value={otherGender} onChange={handleOtherGenderChange} />
      </>
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
      <>
        <label>Are you a library?</label>
        <select onChange={handleLibraryChange}>
          {options.map((value) =>
            <option value={value} key={value}>{value}</option>
          )}
        </select>
      </>
    )
  };

  // Handling errors
  const allErrors = () => {
    return (
      <ul>
        {showOtherGenderInput ? <li>{otherGenderMessage}</li> : null}
        {showAgeError ? <li>{ageError}</li> : null}
        {usernameExist ? <li>{usernameExistMessage}</li> : null}
        {isLibraryError ? <li>{libraryError}</li> : null}
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
    console.log(event.target.value);
    setIsLibrary(event.target.value);
    if (event.target.value !== '') {
      setIsLibaryError(false);
    }
  };



  return (
    <>
      {userGreeting()}
      {allErrors()}
      <form onSubmit={handleAdditionalSubmit}>
        <label>Username</label>
        <input type='text' id='inputUsername' name='inputUsername' value={username} onChange={handleUsernameChange} />
        {genderOptions()}
        <label>Age</label>
        <input type='text' id='inputAge' name='inputAge' value={age} onChange={handleAgeChange} />
        {userIsALibrary()}
        <button id='cancel' name='cancel' onClick={handleCancelButton}>Cancel</button>
        <input type='submit' id='submit' name='submit' value='Submit'></input>
      </form>
    </>
  )
};

export default AdditionalInformation;