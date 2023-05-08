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
  const [clickedOnLibrary, setClickedOnLibrary] = useState(false);
  const [showBookDetail, updateShowBookDetail] = useState(false);
  const [clickedLogin, setClickedLogin] = useState(false);
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
        <Button variant="outline-primary"  onClick={() => {setClickedOnLibrary(!clickedOnLibrary)}}>My Library </Button>
        {clickedOnLibrary ? <PersonalLibrary loggedInUser={user.username} libraryOwner={user.username}/> : null}
        <Header setBookClicked={updateShowBookDetail} setClickedLogin={setClickedLogin} user={user}/>
        {showBookDetail ? <Detail setBookClicked={updateShowBookDetail}/> : <Gallery setBookClicked={updateShowBookDetail}/>}
        {/* <Footer /> */}
        <button onClick={() => {setClickedOnOrder(!clickedOnOrder)}}>My Orders </button>
        {clickedOnOrder ? <Orders/> : null}
        {/* <Footer /> */}
      </div>

    )
  }

//conditional rendering of Gallery or Detail

// return (

//  <div>
//    <Button variant="outline-primary" onClick={() => {setClickedOnMyProfile(!clickedOnMyProfile)}}>My Profile</Button>
//    {clickedOnMyProfile ? <ProfilePage/> : null}
//    <Button variant="outline-primary"  onClick={() => {setClickedOnOrder(!clickedOnOrder)}}>My Orders </Button>
    //{clickedOnOrder ? <Orders/> : null}
    //<Header setBookClicked={updateShowBookDetail}/>
    //{showBookDetail ? <Detail setBookClicked={updateShowBookDetail}/> : <Gallery setBookClicked={updateShowBookDetail}/>}
    //{/* <Footer /> */}

    //{/* <Footer /> */}
    //<PersonalLibrary />
  //</div>

//)
}

export default App;