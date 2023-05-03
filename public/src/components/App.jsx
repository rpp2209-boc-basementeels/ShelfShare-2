import React, { useState, useEffect } from 'react';
import Header from './homepage/Header.jsx';
import Gallery from './homepage/Gallery.jsx';
import PersonalLibrary from './library/PersonalLibrary.jsx'
import Button from 'react-bootstrap/Button';
import ProfilePage from './profile/ProfilePage.jsx';
import Orders from './orders/orders.jsx';

const App = () => {
  const [clickedOnMyProfile, setClickedOnMyProfile] = useState(false);
  const [clickedOnOrder, setClickedOnOrder] = useState(false);

//conditional rendering of Gallery or Detail
return (

  <div>
    <Button variant="outline-primary" onClick={() => {setClickedOnMyProfile(!clickedOnMyProfile)}}>My Profile</Button>
    {clickedOnMyProfile ? <ProfilePage/> : null}
    <Header />
    <Gallery />
    {/* <Footer /> */}
    <button onClick={() => {setClickedOnOrder(!clickedOnOrder)}}>My Orders </button>
    {clickedOnOrder ? <Orders/> : null}
    <PersonalLibrary />
  </div>

)
}

export default App;