import React, { useState } from 'react';
import Html5QrcodePlugin from './Html5QrcodePlugin.jsx';
import ScanResults from './ScanResults.jsx';

const App = (props) => {
    const [decodedResults, setDecodedResults] = useState([]);
    const onNewScanResult = (decodedText, decodedResult) => {
        console.log("App [result]", decodedResult);
        setDecodedResults(prev => [...prev, decodedResult]);
    };

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
            </section>
        </div>
    );
};

export default App;