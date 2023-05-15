import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row, Col, Card }  from 'react-bootstrap';
import GenreFilter from './helper functions/GenreFilter.jsx';
import DateParser from './helper functions/DateParser.jsx';
import NavigationBar from './sub-components/NavigationBar.jsx';
import BookPopup from './sub-components/BookPopup.jsx';
import ProfileType from './sub-components/ProfileType.jsx';
import ScanButton from './sub-components/ScanButton.jsx';
import Shelf from './sub-components/Shelf.jsx';
import Borrowed from './sub-components/Borrowed.jsx';
import Lent from './sub-components/Lent.jsx';

const PersonalLibrary = ({ loggedInUser, libraryOwner }) => {
  const [isUsersOwnLibrary, setisUsersOwnLibrary] = useState(loggedInUser === libraryOwner);
  const [fetchTrigger, setFetchTrigger] = useState(1);
  const [scanResults, setScanResults] = useState([]);

  const saveResultsToLibrary = () => {
    return Promise.all(scanResults.map((b, i) => {
      return axios.post(`/${loggedInUser}/library`, scanResults[i], {
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
      setScanResults(prev => [...prev, bookPostData]);
    })
    .catch((error) => {
      console.log('Error getting book info: ', error);
    })
  };

  return (
    <Container>
      <Row>
        {isUsersOwnLibrary ? <ScanButton onNewScanResult={onNewScanResult} scanResults={scanResults} setScanResults={setScanResults}/> : null}
      </Row>
      <Row>
        <Col style={{ display: "flex", justifyContent: "center"}}>
          {scanResults.length > 0 ? <Button onClick={saveResultsToLibrary}>SAVE TO SHELF</Button> : null}
        </Col>
      </Row>
      <Row>
        <Shelf fetchTrigger={fetchTrigger} libraryOwner={libraryOwner}/>
      </Row>
      <Row>
        {isUsersOwnLibrary ? <Borrowed libraryOwner={libraryOwner}/> : null}
      </Row>
      <Row>
        {isUsersOwnLibrary ? <Lent libraryOwner={libraryOwner}/> : null}
      </Row>
    </Container>
  );
};

export default PersonalLibrary;