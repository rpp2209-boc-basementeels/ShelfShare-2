import React, { useState, useEffect } from 'react';
import NavigationBar from './sub-components/NavigationBar.jsx';
import BookPopup from './sub-components/BookPopup.jsx';
import ProfileType from './sub-components/ProfileType.jsx';
import ScanButton from './sub-components/ScanButton.jsx';
import Shelf from './sub-components/Shelf.jsx';
import Borrowed from './sub-components/Borrowed.jsx';
import Lent from './sub-components/Lent.jsx';

const PersonalLibrary = () => {
  return (
    <div>
      <NavigationBar />
      <ProfileType />
      <ScanButton />
      <Shelf />
      <Borrowed />
      <Lent />
    </div>
  );
};

export default PersonalLibrary;