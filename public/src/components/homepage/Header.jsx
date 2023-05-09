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

const Header = (props) => {
  //conditional rendering of Gallery or Detail

  const userLogin = () => {
    console.log(props.user)
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
            <NavDropdown.Item href="#action/3.4" onClick={() => {props.setUser({})}}>Logout</NavDropdown.Item>
          </NavDropdown>
        </>
      )
    }
  }

  return (
    <div>

      <Card className="my-5">
        <Card.Img src="https://img.freepik.com/free-vector/modern-flowing-blue-wave-banner-background_1035-19862.jpg?w=1800&t=st=1683126398~exp=1683126998~hmac=32efcf4c46fe227b2b642e100b726273a18835340b836765feb001fa7a2cdb4e" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title onClick={() => { props.setBookClicked(false) }} className="justify-content-md-center">ShelfShare</Card.Title>

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
              <Form.Control
                type="search"
                placeholder="Search by Author or Book Title"
                className="me-2"
                aria-label="Search"
              />
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
                      <Nav.Link onClick={() => { props.setBookClicked(false) }} href="#link">Trending</Nav.Link>
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