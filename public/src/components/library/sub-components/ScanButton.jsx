import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Html5QrcodePlugin from './Html5QrcodePlugin.jsx';
import ScanResults from './ScanResults.jsx';
import GenreFilter from '../helper functions/GenreFilter.jsx';
import DateParser from '../helper functions/DateParser.jsx';

const ScanButton = ({ user }) => {
    const [decodedResults, setDecodedResults] = useState([]);

    const onNewScanResult = (isbn) => {
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
        setDecodedResults(prev => [...prev, bookPostData]);
      })
      .catch((error) => {
        console.log('Error getting book info: ', error);
      })
    };

    const saveResultsToLibrary = () => {
      for (var i = 0; i < decodedResults.length; i++) {
        decodedResults[i].user = user;
        axios.post('http://localhost:8080/library', decodedResults[i], {
          headers: {'Content-Type': 'application/json'}
        })
        .catch((error) => {
          console.log('Error posting book info: ', error);
        })
      }
      setDecodedResults([]);
    }

    return (
      <div className="List">
          <section className="List-section">
              <Html5QrcodePlugin
                fps={50}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
              />
              <ScanResults results={decodedResults} />
              <button onClick={saveResultsToLibrary}>Save to Library</button>
          </section>
      </div>
    );
};

export default ScanButton;