import React, { useState, useEffect } from 'react';
import GoogleSignIn from '../authorization/googleSignIn.jsx';
import AdditionalInformation from '../authorization/additionalInformation.jsx';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Header = (props) => {

  const genrePubFilter = (option, genre, startYr, endYr) => {
    let filtered = [];
    props.allBooks.forEach((book) => {
      if (option === 'genre') {
        if (genre === book.genre) {
          filtered.push(book);
        }
      }
      if (option === 'pub') {
        //parse year
        let year = parseInt(book.pub_date.slice(0, 4));
        if (year >= startYr && year <= endYr) {
          filtered.push(book);
        }
      }
    });
    props.updateGalleryBooks(filtered);
  };

  const handleChange = (e) => {
    props.setTerm(event.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    let filtered = [];
    for (var i = 0; i < props.allBooks.length; i++) {
      let currentBook = props.allBooks[i];
      let currentBookTitle = currentBook.title.toLowerCase();
      let currentAuthor = currentBook.author.toLowerCase();
      if (currentBookTitle.includes(props.term.toLowerCase())) {
        filtered.push(currentBook);
      }
      if (currentAuthor.includes(props.term.toLowerCase())) {
        filtered.push(currentBook);
      }
    }
    props.updateGalleryBooks(filtered);
  }

  const handleLogout = () => {
    const hash = localStorage.getItem('shelfshare_cookie');
    axios.delete('/sessions', { data: { hash: hash } })
      .then(() => props.setUser({}))
      .catch((err) => console.log(err))
  };

  const userLogin = () => {
    const keys = Object.keys(props.user);
    if (keys.length === 0) {
      return (
        <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav.Link style={{background: 'white'}} onClick={() => { props.setClickedLogin(true) }}>Login</Nav.Link>
          </Navbar.Collapse>
        </>
      )
    } else {
      return (
        <>
          <NavDropdown style={{background: 'white'}} title={`Hi ${props.user.first_name}`} id="registered-user-menu-dropdown">
            <NavDropdown.Item onClick={(e) => {props.setPage('Profile')}}>My Profile</NavDropdown.Item>
            <NavDropdown.Item onClick={(e) => {props.setPage('Library')}}>My Library</NavDropdown.Item>
            <NavDropdown.Item onClick={(e) => {props.setPage('Orders')}}>Orders</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4" onClick={handleLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </>
      )
    }
  }

  return (
    <div>

      <Card className="my-5">
        <Card.Img src='https://images.squarespace-cdn.com/content/v1/5e948fcefbecac6e4404cc44/1587394208978-OTKRLPNLSZ2QVQD1WUNI/Bookshelf-Banner.jpg' alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title onClick={() => { props.setShowDetail(false) }} className="justify-content-md-center">ShelfShare</Card.Title>

          <Container>
            <Row className="justify-content-end">
              <Col xs={3} md={3}>
                <Navbar>
                  {userLogin()}
                </Navbar>
              </Col>
            </Row>
          </Container>

          <Row>  <br></br> </Row>


          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <Form onSubmit={handleSearch}>
              <Form.Control
                type="search"
                onChange= {handleChange}
                placeholder="Search by Author or Book Title"
                value={props.term}
                className="me-2"
                aria-label="Search"
              />
              <Button variant="secondary" type="submit"> Search </Button>
              </Form>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <Navbar style={{background: 'white'}}>
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="homepage-navbar">
                    <Nav className="me-auto">
                      <row>
                      <Navbar.Text >Explore By:</Navbar.Text>
                      </row>

                      <Nav.Link onClick={() => { props.setShowDetail(false) }}>Trending</Nav.Link>
                      <NavDropdown title="Publication Date" id="pub-date-dropdown" style={{background: 'white'}}>
                        <NavDropdown.Item onClick={() => { genrePubFilter('pub', null, '1800', '1900') }}>1800-1900</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => { genrePubFilter('pub', null, '1901', '1950') }}>1901-1950 </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => { genrePubFilter('pub', null, '1951', '1970') }}>1951-1970 </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => { genrePubFilter('pub', null, '1971', '1980') }}>1971-1980 </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => { genrePubFilter('pub', null, '1981', '1990') }}>1981-1990 </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => { genrePubFilter('pub', null, '1991', '2000') }}>1991-2000 </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => { genrePubFilter('pub', null, '2001', '2010') }}>2000-2010 </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => { genrePubFilter('pub', null, '2010', '2023') }}>2010-2023</NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown title="Genre" id="genre-dropdown" style={{background: 'white'}}>
                        <NavDropdown.Item onClick={() => { genrePubFilter('genre', 'Cooking')}}>Cooking</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => { genrePubFilter('genre', 'Autobiography')}}>Autobiography</NavDropdown.Item>
                        <NavDropdown.Divider />
                      </NavDropdown>

                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Card.ImgOverlay>
      </Card>
    </div>

  )
}

export default Header;