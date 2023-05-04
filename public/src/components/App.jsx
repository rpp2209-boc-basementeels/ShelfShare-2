import React, { useState, useEffect } from 'react';
import Header from './homepage/Header.jsx';
import Gallery from './homepage/Gallery.jsx';
import Footer from './homepage/Footer.jsx';
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
    <Button variant="outline-primary"  onClick={() => {setClickedOnOrder(!clickedOnOrder)}}>My Orders </Button>
    {clickedOnOrder ? <Orders/> : null}
    <Header />
    <Gallery />
    {/* <Footer /> */}
    <PersonalLibrary />
  </div>

)
}

export default App;