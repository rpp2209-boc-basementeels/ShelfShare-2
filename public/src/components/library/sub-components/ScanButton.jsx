import React, { useState } from 'react';
import axios from 'axios';
import Html5QrcodePlugin from './Html5QrcodePlugin.jsx';
import ScanResults from './ScanResults.jsx';
import GenreFilter from '../helper functions/GenreFilter.jsx';
import DateParser from '../helper functions/DateParser.jsx';

const App = (props) => {
    const [decodedResults, setDecodedResults] = useState([]);
    const onNewScanResult = (decodedText, decodedResult) => {
      setDecodedResults(prev => [...prev, decodedResult]);
    };

    const saveResultsToLibrary = () => {
      decodedResults.forEach((result) => {
        const isbn = result.decodedText;
        axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`)
        .then((bookInfo) => {
          const isbnString = `ISBN:${isbn}`;
          const bookData = bookInfo.data[isbnString];
          const book = {
            author: bookData.authors[0].name,
            title: bookData.title,
            genre: GenreFilter(bookData.subjects),
            pub_date: DateParser(bookData.publish_date),
            ISBN: isbn,
            image_url: bookData.cover.medium
          };
          console.log('book object: ', book)
          return book;
        })
        .then((bookInfo) => {
          axios.post('/books', bookInfo.data)
          .then(() => {
            //TODO: Clear the 'scanned ISBNs' field
          })
          .catch((error) => {
            console.log('Error posting book info: ', error);
          })
        })
        .catch((error) => {
          console.log('Error getting book info: ', error);
        })
      })
    }

    return (
      <div className="Scan">
          <section className="Scan-section">
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

export default App;