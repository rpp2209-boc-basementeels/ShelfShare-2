import React, { useState, useEffect } from 'react';
import Header from './homepage/Header.jsx';
import Gallery from './homepage/Gallery.jsx';
import Footer from './homepage/Footer.jsx';
import PersonalLibrary from './library/PersonalLibrary.jsx'
import Button from 'react-bootstrap/Button';
import ProfilePage from './profile/ProfilePage.jsx';
import Orders from './orders/orders.jsx';
import Detail from './book detail/Detail.jsx';

const App = () => {
  const [clickedOnMyProfile, setClickedOnMyProfile] = useState(false);
  const [clickedOnOrder, setClickedOnOrder] = useState(false);
  const [showBookDetail, updateShowBookDetail] = useState(false);

//conditional rendering of Gallery or Detail
return (

  <div>
    <Button variant="outline-primary" onClick={() => {setClickedOnMyProfile(!clickedOnMyProfile)}}>My Profile</Button>
    {clickedOnMyProfile ? <ProfilePage/> : null}
    <Button variant="outline-primary"  onClick={() => {setClickedOnOrder(!clickedOnOrder)}}>My Orders </Button>
    <Header setBookClicked={updateShowBookDetail}/>
    {showBookDetail ? <Detail setBookClicked={updateShowBookDetail}/> : <Gallery setBookClicked={updateShowBookDetail}/>}
    {/* <Footer /> */}
    <button onClick={() => {setClickedOnOrder(!clickedOnOrder)}}>My Orders </button>
    {clickedOnOrder ? <Orders/> : null}
    <Header setBookClicked={updateShowBookDetail}/>
    {showBookDetail ? <Detail setBookClicked={updateShowBookDetail}/> : <Gallery setBookClicked={updateShowBookDetail}/>}
    {/* <Footer /> */}
    <PersonalLibrary />
  </div>

)
}

export default App;