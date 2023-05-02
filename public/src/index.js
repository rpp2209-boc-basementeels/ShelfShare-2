import GoogleSignIn from './components/authorization/googleSignIn.jsx';
import AdditionalInformation from './components/authorization/additionalInformation.jsx';
import { createRoot } from 'react-dom/client';
import React from 'react';
// import css from './Components/home.css';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';

const node = document.getElementById('app');
const root = createRoot(node);
root.render(<GoogleSignIn />);