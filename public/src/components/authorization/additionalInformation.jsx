import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


// Error messages
const ageError = 'Please enter numbers only.';
const otherGenderMessage = 'Please enter your gender.';
const usernameExistMessage = 'Username already exists. Please pick a different one!';
const libraryError = 'Please indicate if you are a library or not.';
const usernameError = 'Please enter in a username.';
const address1ErrorMessage = 'Please enter an address in "Address Line 1".';
const cityErrorMessage = 'Please enter a city.';
const stateErrorMessage = 'Please enter a state.';
const zipcodeErrorMessage = 'Please enter a zipcode.';
const countryErrorMessage = 'Please enter a country.';

const AdditionalInformation = (props) => {
  // States -----------------------------------------------------
  // Username
  const [username, setUsername] = useState('');
  const [usernameEmpty, setUsernameEmpty] = useState(false);
  const [usernameExist, setUsernameExist] = useState(false);

  // Gender
  const [genderSelection, setGenderSelection] = useState('');
  const [otherGender, setOtherGender] = useState('');
  const [showOtherGenderInput, setShowOtherGenderInput] = useState(false);
  const [otherGenderError, setOtherGenderError] = useState(false);


  // Age
  const [age, setAge] = useState('');
  const [showAgeError, setShowAgeError] = useState(false);

  // Library
  const [isLibrary, setIsLibrary] = useState('');
  const [isLibraryError, setIsLibraryError] = useState(false);

  // Addresses
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [country, setCountry] = useState('');
  const [address1Error, setAddress1Error] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [zipcodeError, setZipcodeError] = useState(false);
  const [countryError, setCountryError] = useState(false);

  // Greeting
  const userGreeting = () => {
    return (
      <>
        Greetings {props.currentUser.given_name}! Please enter the following information.
      </>
    )
  };

  // Submitting
  const handleAdditionalSubmit = (event) => {
    event.preventDefault();

    var errors = false;
    username === '' ? errors = true : null;
    isLibrary === '' ? errors = true : null;
    address1 === '' ? errors = true : null;
    city === '' ? errors = true : null;
    zipcode === '' ? errors = true : null;
    state === '' ? errors = true : null;
    country === '' ? errors = true : null;
    genderSelection === 'Other' && otherGender === '' ? errors = true : null;


    if (errors) {
      username === '' ? setUsernameEmpty(true) : setUsernameEmpty(false);
      isLibrary === '' ? setIsLibraryError(true) : setIsLibraryError(false);
      address1 === '' ? setAddress1Error(true) : setAddress1Error(false);
      city === '' ? setCityError(true) : setCityError(false);
      zipcode === '' ? setZipcodeError(true) : setZipcodeError(false);
      state === '' ? setStateError(true) : setStateError(false);
      country === '' ? setCountryError(true) : setCountryError(false);
      genderSelection === 'Other' && otherGender === '' ? setOtherGenderError(true) : setOtherGenderError(false);

    } else {

      axios.get(`http://localhost:3000/username`, { params: { username: username } })
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

              axios.post(`http://localhost:3000/newUser`, user)
                .then(data => {
                  props.setUser(user);
                  axios.get(`http://localhost:3000/`)
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
      <Form.Group className='additional-information-gender'>
        <Form.Label>Gender</Form.Label>
        <Form.Select value={genderSelection} onChange={handleGenderSelectionChange}>
          {options.map((value) =>
            <option value={value} key={value}>{value}</option>
          )}
        </Form.Select>
        {showOtherGenderInput ? null : <Form.Text>We'll never share your gender with anyone else.</Form.Text>}
      </Form.Group>
    )
  };

  const otherGenderElements = () => {
    return (
      <Form.Group className='additional-information-other-gender'>
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
      <Form.Group className='additional-information-library'>
        <Form.Label>Are you a library</Form.Label>
        <Form.Select value={isLibrary} onChange={handleLibraryChange}>
          {options.map((value) =>
            <option value={value} key={value}>{value}</option>
          )}
        </Form.Select>
      </Form.Group>
    )
  };

  // Address
  const addressForm = () => {
    return (
      <>
        <Row>
          <Col>
            <Form.Group className='additional-information-address-1'>
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control type='text' value={address1} onChange={handleAddressOneChange} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='additional-information-address-2'>
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control type='text' value={address2} onChange={handleAddressTwoChange} />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className='additional-information-city'>
              <Form.Label>City</Form.Label>
              <Form.Control type='text' value={city} onChange={handleCityChange} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='additional-information-state'>
              <Form.Label>State</Form.Label>
              <Form.Control type='text' value={state} onChange={handleStateChange} />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className='additional-information-postal-code'>
              <Form.Label>Postal Code</Form.Label>
              <Form.Control type='text' value={zipcode} onChange={handleZipcodeChange} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='additional-information-country'>
              <Form.Label>Country</Form.Label>
              <Form.Control type='text' value={country} onChange={handleCountryChange} />
            </Form.Group>
          </Col>
        </Row>
      </>
    )
  };

  // Handling errors
  const allErrors = () => {
    return (
      <ul className='additional-information-errors'>
        {usernameEmpty ? <li className='additional-information-error'>{usernameError}</li> : null}
        {showAgeError ? <li className='additional-information-error'>{ageError}</li> : null}
        {otherGenderError ? <li className='additional-information-error'>{otherGenderMessage}</li> : null}
        {isLibraryError ? <li className='additional-information-error'>{libraryError}</li> : null}
        {address1Error ? <li className='additional-information-error'>{address1ErrorMessage}</li> : null}
        {cityError ? <li className='additional-information-error'>{cityErrorMessage}</li> : null}
        {stateError ? <li className='additional-information-error'>{stateErrorMessage}</li> : null}
        {zipcodeError ? <li className='additional-information-error'>{zipcodeErrorMessage}</li> : null}
        {countryError ? <li className='additional-information-error'>{countryErrorMessage}</li> : null}
        {usernameExist ? <li className='additional-information-error'>{usernameExistMessage}</li> : null}
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

  const handleLibraryChange = (event) => {
    setIsLibrary(event.target.value);
    if (event.target.value !== '') {
      setIsLibraryError(false);
    }
  };

  const handleAddressOneChange = (event) => {
    setAddress1(event.target.value);
  };

  const handleAddressTwoChange = (event) => {
    setAddress2(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className='additional-information-container'>
      <Form className='additional-information-form' onSubmit={handleAdditionalSubmit}>
        {userGreeting()}
        {allErrors()}
        <Row>
          <Col>
            <Form.Group className='additional-information-username'>
              <Form.Label>Username</Form.Label>
              <Form.Control type='text' placeholder='Enter username' value={username} onChange={handleUsernameChange} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='additional-information-age'>
              <Form.Label>Age</Form.Label>
              <Form.Control type='text' placeholder='Enter age' value={age} onChange={handleAgeChange} />
              <Form.Text>We'll never share your age with anyone else.</Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            {genderOptions()}
          </Col>
          <Col>
            {userIsALibrary()}
          </Col>
        </Row>

        <Row>
          {showOtherGenderInput ? otherGenderElements() : null}
          {showOtherGenderInput ? <Form.Text>We'll never share your gender with anyone else.</Form.Text> : null}
        </Row>

        {addressForm()}
        <div className='additional-information-buttons'>
          <Button variant='outline-primary' id='cancel' name='cancel' onClick={handleCancelButton}>Cancel</Button>
          <Button variant='outline-primary' id='submit' name='submit' onClick={handleAdditionalSubmit}>Submit</Button>
        </div>
      </Form>
    </div>
  )
};

export default AdditionalInformation;