import React from 'react';
import Html5QrcodePlugin from './Html5QrcodePlugin.jsx';
import ScanResults from './ScanResults.jsx';

const ScanButton = ({ onNewScanResult, scanResults, setScanResults}) => {
  return (
    <div className="List">
        <section className="List-section">
            <Html5QrcodePlugin
              fps={50}
              qrbox={250}
              disableFlip={false}
              qrCodeSuccessCallback={onNewScanResult}
            />
            {scanResults ? <ScanResults results={scanResults} /> : null}
        </section>
    </div>
  );
};

export default ScanButton;