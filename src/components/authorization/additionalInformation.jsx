import React, { useState, useEffect } from 'react';

const ageError = 'Please enter numbers only.';
const otherGenderMessage = 'Please enter your gender.'

const AdditionalInformation = () => {
  const [genderSelection, setGenderSelection] = useState('');
  const [otherGender, setOtherGender] = useState('');
  const [age, setAge] = useState('');
  const [showAgeError, setShowAgeError] = useState(false);
  const [showOtherGenderInput, setShowOtherGenderInput] = useState(false);

  const handleAdditionalSubmit = (event) => {
    event.preventDefault();
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
        <label>Gender:</label>
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
        <label>Other Gender: </label>
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

  return (
    <>
      {showOtherGenderInput ? <>{otherGenderMessage}</> : null}
      {showAgeError ? <>{ageError}</> : null}
      <form onSubmit={handleAdditionalSubmit}>
        {genderOptions()}
        Age: <input type='text' id='inputAge' name='inputAge' value={age} onChange={handleAgeChange} />
        <input type='submit' id='submit' name='submit' value='Submit'></input>
      </form>
    </>
  )
};

export default AdditionalInformation;