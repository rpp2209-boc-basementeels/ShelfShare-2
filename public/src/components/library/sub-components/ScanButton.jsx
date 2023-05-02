import React, { useState, useEffect } from 'react';
import Html5QrcodePlugin from './Html5QrcodePlugin.jsx';

const ScanButton = () => {
  const onNewScanResult = (decodedText, decodedResult) => {
    // handle decoded results here
  };

  return (
  <div>
    <Html5QrcodePlugin
      fps={10}
      qrbox={250}
      disableFlip={true}
      qrCodeSuccessCallback={onNewScanResult}
    />
  </div>
  );
};

export default ScanButton;