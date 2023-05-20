import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Footer = () => {

  return (
    <div>
<Container className='container-md border'>
  <Row>
  <div className='p-3' style={{textAlign: 'center'}}>ShelfShare is an open source book sharing application created by the <a href="https://www.youtube.com/shorts/ivdWvGYeEnQ">Basement Eels</a> dev team for Colibri Labs</div>
  </Row>
</Container>
    </div>

  )
}

  export default Footer;