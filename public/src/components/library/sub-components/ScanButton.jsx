import React, { useState } from 'react';
import axios from 'axios';
import Html5QrcodePlugin from './Html5QrcodePlugin.jsx';
import ScanResults from './ScanResults.jsx';

const App = (props) => {
    const [decodedResults, setDecodedResults] = useState([]);

    const onNewScanResult = (isbn) => {
      axios.get(`https://openlibrary.org/isbn/${isbn}.json`)
      .then((bookInfo) => {
        console.log('bookinfo.data:', bookInfo.data);
        setDecodedResults(prev => [...prev, bookInfo.data]);
      })
      .catch((error) => {
        console.log('Error getting book info: ', error);
      })
    };

    const saveResultsToLibrary = () => {
      decodedResults.forEach((result) => {
        axios.post('/books', bookInfo)
        .then(() => {
          setDecodedResults([]);
        })
        .catch((error) => {
          console.log('Error posting book info: ', error);
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