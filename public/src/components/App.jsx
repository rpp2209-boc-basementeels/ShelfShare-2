import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Header from './homepage/Header.jsx';
import Gallery from './homepage/Gallery.jsx';
import Footer from './homepage/Footer.jsx';
import PersonalLibrary from './library/PersonalLibrary.jsx'
import ProfilePage from './profile/ProfilePage.jsx';
import PublicProfilePage from './profile/PublicProfilePage.jsx';
import Orders from './orders/orders.jsx';
import Detail from './book detail/Detail.jsx';
import GoogleSignIn from './authorization/googleSignIn.jsx';
import Data from './orders/dummyData.js';
import axios from 'axios';

const App = () => {

  const [selectedPage, setSelectedPage] = useState('Home');
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
  const [showBookDetail, setShowDetail] = useState(false);
  const [galleryBooks, updateGalleryBooks] = useState(Data);
  const [selectedBookId, updateSelectedBookId] = useState(null);
  // Pass both usernameThatWasClicked and setUsernameThatWasClicked down as props through homepage components,
  // to the individual reviews for a book (use Review component in profile/components/Review.jsx). This component
  // is set up to receive these props of the same names (usernameThatWasClicked and setUsernameThatWasClicked)
  // and will update below, triggering a re-rendering of the clicked-on-user's public profile page, line 42
  // When "back" button is clicked on this profile page, state resets to an empty string
  const [usernameThatWasClicked, setUsernameThatWasClicked] = useState('');

  ////////////////////////////////////////////
  // setting the state for the Orders
  const [loan, setLoan] = useState([]);
  const [borrow, setBorrow] = useState([]);
  const [pend, setPend] = useState([]);

  let testUser = 7;

  let fetcher = () => {
    axios.get(`orders/${testUser}`)
    .then(data => {
      setLoan(data.data.loaned);
      setBorrow(data.data.borrowed);
      setPend(data.data.pending);
    })
    .catch(err => console.log('err in orders', err));
}

  useEffect(() => {
    fetcher();
  }, [])

  var pendingStyle = (array) => {
    if (array.length > 0)  { return array.length }
    else { return; }
  }
  ///////////////////////////////////////////

  useEffect(() => {
    axios.get('http://localhost:3000/trending')
    .then((books) => {
      console.log(books.data);
      updateGalleryBooks(books.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [Gallery]);

  if (clickedLogin) {
    return (
      <div>
        <GoogleSignIn setUser={setUser} setClickedLogin={setClickedLogin}/>
      </div>
    )
  } else if (usernameThatWasClicked !== '') {
    return (
      <div>
        <PublicProfilePage set={setUsernameThatWasClicked} username={usernameThatWasClicked}/>
      </div>
    )
  } else {
    return (
      <Container>
        <Row>
          <Col>
            <Button variant="outline-primary" onClick={() => {setSelectedPage('Home')}}>Home</Button>
          </Col>
          <Col>
            <Button variant="outline-primary" onClick={() => {setSelectedPage('Profile')}}>My Profile</Button>
          </Col>
          <Col>
            <Button variant="outline-primary" onClick={() => {setSelectedPage('Orders')}}>
            My Orders <span className=" badge .badge-* badge-dark  " style={{color:'red'}}>{pendingStyle(pend)}</span>
            </Button>
          </Col>
          <Col>
            <Button variant="outline-primary" onClick={() => {setSelectedPage('Library')}}>My Library</Button>
          </Col>
            <Header setShowDetail={setShowDetail} setClickedLogin={setClickedLogin} user={user} setUser={setUser}/>
          {selectedPage === 'Login' ? <GoogleSignIn setUser={setUser} setClickedLogin={setClickedLogin}/> : null}
          {selectedPage === 'Profile' ? <ProfilePage user={user}/> : null}
          {selectedPage === 'Library' ? <PersonalLibrary loggedInUser={'peckmc'} libraryOwner={'peckmc'}/> : null}
          {selectedPage === 'Orders' ? <Orders user={user} page={selectedPage} bookData={{loaned: loan, borrowed: borrow, pending: pend}}/> : null}
          {selectedPage === 'Home' ? <Gallery selectedBookId={selectedBookId} updateSelectedBookId={updateSelectedBookId} books={galleryBooks} showBookDetail={showBookDetail} setShowDetail={setShowDetail}/> : null}
          {/* <Footer /> */}
        </Row>
      </Container>
    )
  }
}

export default App;