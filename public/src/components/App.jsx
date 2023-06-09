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
  // const [user, setUser] = useState({
  //   user_id: 12,
  //   first_name: 'Kevin',
  //   last_name: 'Hoang',
  //   photo: `https://lh3.googleusercontent.com/a/AGNmyxbKSB-E9sl8llXqjsc04GfTzVm9fN8CgXHl_mv7=s96-c`,
  //   email: 'knhoangre@gmail.com',
  //   gender: 'non-binary',
  //   age: '100',
  //   username: 'Kevin',
  //   is_library: false,
  //   line_1: "1800 Nowhere St",
  //   line_2: "",
  //   city: "Your Town",
  //   state: "My State",
  //   postal: "13245",
  //   country: "United States"
  // });
  const [user, setUser] = useState({});
  const [showBookDetail, setShowDetail] = useState(false);
  const [galleryBooks, updateGalleryBooks] = useState(null);
  const [allBooks, updateAllBooks] = useState(Data);
  const [term, setTerm] = useState('');
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

  let fetchBorrow = () => {
    if (user.user_id !== undefined) {
    axios.get(`orders/borrowed/${user.user_id}`)
      .then(data => {
        setBorrow(data.data);
      })
    .catch(err => console.log('err in orders', err));
  }
}

  let fetchLoan = () => {
    if (user.user_id !== undefined) {
      axios.get(`orders/loaned/${user.user_id}`)
        .then(data => {
          setLoan(data.data);
        })
        .catch(err => console.log('err in orders', err));
    }
  }

  let fetchPending = () => {
    if (user.user_id !== undefined) {
      axios.get(`orders/pending/${user.user_id}`)
        .then(data => {
          setPend(data.data);
        })
        .catch(err => console.log('err in orders', err));
    }
  }

  useEffect(() => {
    fetchBorrow();
    fetchLoan();
    fetchPending();
  }, [user.user_id])

  ///////////////////////////////////////////

  // Need to log users into the app if the users exist
  useEffect(() => {
    const hash = localStorage.getItem('shelfshare_cookie');
    axios.get('/sessions', { params: { hash: hash } })
      .then((session) => {
        if (session.data[0]) {
          setUser(session.data[0]);
        }
      })
  }, [])

  useEffect(() => {
    axios.get('/trending')
      .then((books) => {
        updateAllBooks(books.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Gallery]);

  if (clickedLogin) {
    return (
      <div>
        <GoogleSignIn setUser={setUser} setClickedLogin={setClickedLogin} />
      </div>
    )
  } else if (usernameThatWasClicked !== '') {
    return (
      <div>
        <PublicProfilePage setShowDetail={setShowDetail} set={setUsernameThatWasClicked} username={usernameThatWasClicked} />
      </div>
    )
  } else {
    return (
      <Container>
        <Row>
          {/* <Col>
            <Button variant="outline-primary" onClick={() => {setSelectedPage('Home'); updateGalleryBooks(null); setTerm('');}}>Home</Button>
          </Col>
          <Col>
            <Button variant="outline-primary" onClick={() => { setSelectedPage('Profile') }}>My Profile</Button>
          </Col>
          <Col>
            <Button variant="outline-primary" onClick={() => { setSelectedPage('Orders') }}>
              My Orders <span className=" badge .badge-* badge-dark  " style={{ color: 'red' }}>{pendingStyle(pend)}</span>
            </Button>
          </Col>
          {Object.hasOwn(user, 'username') ? <Col>
            <Button variant="outline-primary" onClick={() => { setSelectedPage('Library') }}>My Library</Button>
          </Col> : null} */}
            <Header setPage={setSelectedPage} term={term} setTerm={setTerm} updateGalleryBooks={updateGalleryBooks} setShowDetail={setShowDetail} setClickedLogin={setClickedLogin} user={user} setUser={setUser} updateAllBooks={updateAllBooks} allBooks={allBooks} notifications={pend}/>
          {selectedPage === 'Login' ? <GoogleSignIn setUser={setUser} setClickedLogin={setClickedLogin}/> : null}
          {selectedPage === 'Profile' ? <ProfilePage user={user} setUser={setUser}/> : null}
          {selectedPage === 'Library' ? <PersonalLibrary user={user}/> : null}
          {selectedPage === 'Orders' ? <Orders user={user.user_id} page={selectedPage} bookData={{loaned: loan, borrowed: borrow, pending: pend}}/> : null}
          {selectedPage === 'Home' ? <Gallery usernameThatWasClicked={usernameThatWasClicked} setUsernameThatWasClicked={setUsernameThatWasClicked} user={user} selectedBookId={selectedBookId} updateSelectedBookId={updateSelectedBookId} books={galleryBooks === null ? allBooks : galleryBooks} updateGalleryBooks={updateGalleryBooks} showBookDetail={showBookDetail} setShowDetail={setShowDetail}/> : null}
          <Footer />
        </Row>
      </Container>
    )
  }
}

export default App;