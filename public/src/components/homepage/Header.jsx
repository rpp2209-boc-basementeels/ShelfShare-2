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

  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    console.log(event.target.value);
    setTerm(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //created an array to hold the filtered books
    let filtered = [];
    //iterate over all books
    for (var i = 0; i < props.allBooks.length; i++) {
    //at each book...
    let currentBook = props.allBooks[i];
    //if the title string or the author string contains the term
    if (currentBook.title.includes(term)) {
      filtered.push(currentBook);
    }
    if (currentBook.author.includes(term)) {
      filtered.push(currentBook);
    }
    }
    props.updateAllBooks(filtered);
  }

  const handleLogout = () => {
    axios.delete('/sessions')
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
            <Nav.Link href="#link" onClick={() => { props.setClickedLogin(true) }}>Login</Nav.Link>
          </Navbar.Collapse>
        </>
      )
    } else {
      return (
        <>
          <NavDropdown title={`Hi ${props.user.first_name}`} id="registered-user-menu-dropdown">
            <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">My Shelf</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Orders</NavDropdown.Item>
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
      <Card.Img src="https://img.freepik.com/free-vector/modern-flowing-blue-wave-banner-background_1035-19862.jpg?w=1800&t=st=1683126398~exp=1683126998~hmac=32efcf4c46fe227b2b642e100b726273a18835340b836765feb001fa7a2cdb4e" alt="Card image"/>
      <Card.ImgOverlay>
        <Card.Title onClick={() => {props.setShowDetail(false)}} className="justify-content-md-center">ShelfShare</Card.Title>

          <Container>
            <Row className="justify-content-md-end">
              <Col xs={3} md={3}>
                <Navbar>
                  {userLogin()}
                </Navbar>
              </Col>
            </Row>
          </Container>

          <Row>  <br></br> </Row>


          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
              <Form onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                onChange= {handleChange}
                placeholder="Search by Author or Book Title"
                value={term}
                className="me-2"
                aria-label="Search"
              />
              <Button variant="primary" type="submit"> Submit </Button>
              </Form>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
              <Navbar>
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="homepage-navbar">
                    <Nav className="me-auto">
                      <Navbar.Text href="#home">Explore By:</Navbar.Text>
                      <Nav.Link onClick={() => { props.setShowDetail(false) }} href="#link">Trending</Nav.Link>
                      <NavDropdown title="Publication Date" id="pub-date-dropdown">
                        <NavDropdown.Item href="#action/3.1">1800-1900</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          1901-2000
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">2000-2020</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="Genre" id="genre-dropdown">
                        <NavDropdown.Item href="#action/3.1">Horror</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Mystery</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
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