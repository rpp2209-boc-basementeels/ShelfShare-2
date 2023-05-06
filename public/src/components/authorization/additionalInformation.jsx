import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ageError = 'Please enter numbers only.';
const otherGenderMessage = 'Please enter your gender.'
const usernameExistMessage = 'Username already exists. Please pick a different one!';

const AdditionalInformation = (props) => {
  const [username, setUsername] = useState('');
  const [genderSelection, setGenderSelection] = useState('');
  const [otherGender, setOtherGender] = useState('');
  const [age, setAge] = useState('');
  const [showAgeError, setShowAgeError] = useState(false);
  const [showOtherGenderInput, setShowOtherGenderInput] = useState(false);
  const [usernameExist, setUsernameExist] = useState(false);
  console.log(props);

  const handleAdditionalSubmit = (event) => {
    event.preventDefault();

    axios.get('/username', { params: { username: username }})
      .then(data => {
        if (data.data.length === 0) { // username does not exist
          // Check the gender
          let gender;
          if (genderSelection === '') {
            gender = 'Undisclosed';
          } else if (genderSelection === 'Other') {
            gender = otherGender;
          } else {
            gender = genderSelection;
          }


          const user = {
            first_name: props.currentUser.given_name,
            last_name: props.currentUser.family_name,
            photo: props.currentUser.picture,
            email: props.currentUser.email,
            gender: gender.toLowerCase(),
            age: age !== '' ? age : -1,
            username: username.toLowerCase(),
          };
          axios.post('/newUser', user)
            .then(data => {
              axios.get('/')
                .then((data) => {console.log(data)})
                .catch(() => {});
            }) // then send back to homepage
            .catch(err => console.log(err));
        } else { // username exists, choose a different one
          setUsernameExist(true);
        }
      })
      .catch(err => console.log(err));
  };

  const handleGenderSelectionChange = (event) => {
    setGenderSelection(event.target.value);
  };

  const handleOtherGenderChange = (event) => {
    setOtherGender(event.target.value);
  };

  useEffect(() => {
    if (genderSelection === 'Other') {
      setShowOtherGenderInput(true);
    } else {
      setShowOtherGenderInput(false);
    }
  }, [genderSelection])

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

  const userGreeting = () => {
    return (
      <>
        Greetings {props.currentUser.given_name}! Please enter the following information.
      </>
    )
  };

  const handleCancelButton = () => {
    // Go back to home page
  };

  return (
    <>
      {userGreeting()}
      {showOtherGenderInput ? <>{otherGenderMessage}</> : null}
      {showAgeError ? <>{ageError}</> : null}
      {usernameExist ? <>{usernameExistMessage}</> : null}
      <form onSubmit={handleAdditionalSubmit}>
        <label>Username</label>
        <input type='text' id='inputUsername' name='inputUsername' value={username} onChange={handleUsernameChange}/>
        {genderOptions()}
        <label>Age</label>
        <input type='text' id='inputAge' name='inputAge' value={age} onChange={handleAgeChange} />
        <button id='cancel' name='cancel' onClick={handleCancelButton}>Cancel</button>
        <input type='submit' id='submit' name='submit' value='Submit'></input>
      </form>
    </>
  )
};

export default AdditionalInformation;