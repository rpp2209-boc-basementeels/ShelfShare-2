import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row, Col, Card, Image, ListGroup }  from 'react-bootstrap';
import GenreFilter from './helper functions/GenreFilter.jsx';
import DateParser from './helper functions/DateParser.jsx';
import ProfileType from './sub-components/ProfileType.jsx';
import ScanButton from './sub-components/ScanButton.jsx';
import Shelf from './sub-components/Shelf.jsx';
import Borrowed from './sub-components/Borrowed.jsx';
import Lent from './sub-components/Lent.jsx';

const PersonalLibrary = ({ user }) => {
  const [fetchTrigger, setFetchTrigger] = useState(1);
  const [scanResults, setScanResults] = useState([]);
  const [lastResult, setLastResult] = useState({});

  const saveResultsToLibrary = () => {
    return Promise.all(scanResults.map((b, i) => {
      return axios.post(`/${user.username}/library`, scanResults[i], {
        headers: {'Content-Type': 'application/json'}
      });
    }))
    .then((results) => {
      setScanResults([])
      setFetchTrigger((trigger) => trigger + 1);
    })
    .catch((error) =>{
      console.log('error', error)
    })
  }

  const onNewScanResult = async (isbn) => {
    if (isbn !== lastResult) {
      axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`)
      .then((bookInfo) => {
        const isbnString = `ISBN:${isbn}`;
        const bookData = bookInfo.data[isbnString];
        const authors = bookData.authors.map((author) => {
          return author.name;
        });
        const bookPostData = {
          authors: authors,
          title: bookData.title,
          genre: GenreFilter(bookData.subjects),
          pub_date: DateParser(bookData.publish_date),
          ISBN: parseInt(isbn)
        };
        if (Object.hasOwn(bookData, 'cover')) {
          bookPostData.image_url = bookData.cover.small;
        }
        setLastResult(isbn);
        setScanResults(prev => [...prev, bookPostData]);
      })
      .catch((error) => {
        console.log('Error getting book info: ', error);
      })
    }
  };

  function addDefaultSrc(e) {
    e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';
  }

  return (
    <Container>
      <Container className="p-0" style={{display: 'flex'}}>
        <Image rounded src={user.photo} style={{marginBottom: '3rem', height: '10rem'}} onError={addDefaultSrc}></Image>
        <ListGroup variant="flush" style={{marginTop: '2.5rem', marginLeft: '0.75rem'}}>
          <ListGroup.Item>{user.first_name.toUpperCase() + ' ' + user.last_name.toUpperCase()}</ListGroup.Item>
          <ListGroup.Item>{user.is_Library ? 'PUBLIC LIBRARY' : 'INDIVIDUAL'}</ListGroup.Item>
        </ListGroup>
      </Container>
      <Row>
        <ScanButton onNewScanResult={onNewScanResult} scanResults={scanResults} setScanResults={setScanResults}/>
      </Row>
      <Row>
        <Col style={{ display: "flex", justifyContent: "center"}}>
          {scanResults.length > 0 ? <Button onClick={saveResultsToLibrary}>SAVE TO SHELF</Button> : null}
        </Col>
      </Row>
      <Row style={{ display: "flex", justifyContent: "center"}}>
        <Shelf fetchTrigger={fetchTrigger} user={user}/>
      </Row>
      <Row style={{ display: "flex", justifyContent: "center"}}>
        <Borrowed user={user}/>
      </Row>
      <Row style={{ display: "flex", justifyContent: "center"}}>
        <Lent user={user}/>
      </Row>
    </Container>
  );
};

export default PersonalLibrary;