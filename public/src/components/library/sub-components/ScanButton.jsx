import React from 'react';
import Html5QrcodePlugin from './Html5QrcodePlugin.jsx';
import ScanResults from './ScanResults.jsx';

const ScanButton = ({ onNewScanResult, scanResults, setScanResults}) => {
  return (
    <div>
        <h5>Scan Barcodes to Add to Your Shelf</h5>
        <Html5QrcodePlugin
          fps={50}
          qrbox={250}
          rememberLastUsedCamera={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
        {scanResults.length > 0 ? <ScanResults results={scanResults} /> : null}
    </div>
  );
};

export default ScanButton;