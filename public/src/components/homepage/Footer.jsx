import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Footer = () => {

  return (
    <div>
<Container className="p-2">
  <Row>
  <div className="container-md border" style={{textAlign: 'center'}}>ShelfShare is an open source book sharing application created by the Basement Eels dev team for Colibri Labs</div>
  </Row>
</Container>
    </div>

  )
}

  export default Footer;