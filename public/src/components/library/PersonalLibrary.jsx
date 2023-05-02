import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar.jsx';
import BookPopup from './BookPopup.jsx';
import ProfileType from './ProfileType.jsx';
import ScanButton from './ScanButton.jsx';
import Shelf from './Shelf.jsx';
import Borrowed from './Borrowed.jsx';
import Lent from './Lent.jsx';

const PersonalLibrary = () => {
  return (
    <NavigationBar />
    <ProfileType />
    <ScanButton />
    <Shelf />
    <Borrowed />
    <Lent />
  );
}