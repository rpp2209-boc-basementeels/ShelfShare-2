import React, { useState, useEffect } from 'react';
import Header from './homepage/Header.jsx';
import Gallery from './homepage/Gallery.jsx';
import Footer from './homepage/Footer.jsx';
import PersonalLibrary from './library/PersonalLibrary.jsx'
import Button from 'react-bootstrap/Button';
import ProfilePage from './profile/ProfilePage.jsx';
import Orders from './orders/orders.jsx';
import Detail from './book detail/Detail.jsx';
import GoogleSignIn from './authorization/googleSignIn.jsx';

const App = () => {
  // need to pass down info about the current logged-in user to ProfilePage as props
  const [clickedOnMyProfile, setClickedOnMyProfile] = useState(false);
  const [clickedOnOrder, setClickedOnOrder] = useState(false);
  const [showBookDetail, updateShowBookDetail] = useState(false);
  const [clickedLogin, setClickedLogin] = useState(false);
//   const [user, setUser] = useState({
//     first_name: 'Kevin',
//     last_name: 'Hoang',
//     photo: `https://lh3.googleusercontent.com/a/AGNmyxbKSB-E9sl8llXqjsc04GfTzVm9fN8CgXHl_mv7=s96-c`,
//     email: 'knhoangre@gmail.com',
//     gender: 'male',
//     age: '100',
//     username: 'kevinduh'
// });
  const [user, setUser] = useState({});


  if (clickedLogin) {
    return (
      <div>
        <GoogleSignIn setUser={setUser} setClickedLogin={setClickedLogin}/>
      </div>
    )
  } else {
    return (

      <div>
        <Button variant="outline-primary" onClick={() => {setClickedOnMyProfile(!clickedOnMyProfile)}}>My Profile</Button>
        {clickedOnMyProfile ? <ProfilePage user={user}/> : null}
        <Button variant="outline-primary"  onClick={() => {setClickedOnOrder(!clickedOnOrder)}}>My Orders </Button>
        <Header setBookClicked={updateShowBookDetail} setClickedLogin={setClickedLogin} user={user} setUser={setUser}/>
        {showBookDetail ? <Detail setBookClicked={updateShowBookDetail}/> : <Gallery setBookClicked={updateShowBookDetail}/>}
        {/* <Footer /> */}
        <button onClick={() => {setClickedOnOrder(!clickedOnOrder)}}>My Orders </button>
        {clickedOnOrder ? <Orders/> : null}
        {/* <Footer /> */}
        <PersonalLibrary />
      </div>
    )
  }
}

export default App;