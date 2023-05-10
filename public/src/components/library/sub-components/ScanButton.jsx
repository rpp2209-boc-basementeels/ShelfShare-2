import React from 'react';
import Html5QrcodePlugin from './Html5QrcodePlugin.jsx';
import ScanResults from './ScanResults.jsx';

const ScanButton = ({ onNewScanResult, scanResults, setScanResults}) => {
  return (
    <div>
        <h5>SCAN BARCODES TO ADD BOOKS TO YOUR SHELF</h5>
        <Html5QrcodePlugin
          fps={50}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
        {scanResults.length > 0 ? <ScanResults results={scanResults} /> : null}
    </div>
  );
};

export default ScanButton;