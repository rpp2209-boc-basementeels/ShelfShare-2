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
import Orders from './orders/orders.jsx';
import Detail from './book detail/Detail.jsx';
import GoogleSignIn from './authorization/googleSignIn.jsx';
import Data from './orders/dummyData.js';
import axios from 'axios';

const App = () => {
  const [selectedPage, setSelectedPage] = useState('Home');
  const [clickedLogin, setClickedLogin] = useState(false);
  const [user, setUser] = useState({});
  const [showBookDetail, setShowDetail] = useState(false);
  const [galleryBooks, updateGalleryBooks] = useState(Data);
  const [selectedBook, updateSelectedBook] = useState(null);

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
            <Button variant="outline-primary" onClick={() => {setSelectedPage('Orders')}}>My Orders </Button>
          </Col>
          <Col>
            <Button variant="outline-primary" onClick={() => {setSelectedPage('Library')}}>My Library</Button>
          </Col>
            <Header setShowDetail={setShowDetail} setClickedLogin={setClickedLogin} user={user} setUser={setUser}/>
          {selectedPage === 'Login' ? <GoogleSignIn setUser={setUser} setClickedLogin={setClickedLogin}/> : null}
          {selectedPage === 'Profile' ? <ProfilePage user={user}/> : null}
          {selectedPage === 'Library' ? <PersonalLibrary loggedInUser={'peckmc'} libraryOwner={'peckmc'}/> : null}
          {selectedPage === 'Orders' ? <Orders user={user} page={selectedPage}/> : null}
          {selectedPage === 'Home' ? <Gallery books={galleryBooks} showBookDetail={showBookDetail} setShowDetail={setShowDetail}/> : null}
          {/* <Footer /> */}
        </Row>
      </Container>
    )
  }
}

export default App;