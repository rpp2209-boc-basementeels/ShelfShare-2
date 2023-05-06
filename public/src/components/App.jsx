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
import Data from './orders/dummyData.js';

const App = () => {
  // need to pass down info about the current logged-in user to ProfilePage as props
  const [clickedOnMyProfile, setClickedOnMyProfile] = useState(false);
  const [clickedOnOrder, setClickedOnOrder] = useState(false);
  const [clickedOnLibrary, setClickedOnLibrary] = useState(false);
  const [clickedLogin, setClickedLogin] = useState(false);
  const [user, setUser] = useState({});
  const [showBookDetail, setShowDetail] = useState(false);
  const [galleryBooks, updateGalleryBooks] = useState(Data);
  const [selectedBook, updateSelectedBook] = useState(null);

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
        {/* TODO: only show 'My Library' button if user is logged in */}
        <Button variant="outline-primary"  onClick={() => {setClickedOnLibrary(!clickedOnLibrary)}}>My Library </Button>
        {clickedOnLibrary ? <PersonalLibrary loggedInUser={'peckmc'} libraryOwner={'peckmc'}/> : null}
        {clickedOnOrder ? <Orders/> : null}
        <Header setBookClicked={updateShowBookDetail} setClickedLogin={setClickedLogin} user={user} setUser={setUser}/>
        {showBookDetail ? <Detail setBookClicked={updateShowBookDetail}/> : <Gallery books={galleryBooks} setBookClicked={updateShowBookDetail}/>}
            {/* <Footer /> */}
      </div>
    )
  }
}

export default App;