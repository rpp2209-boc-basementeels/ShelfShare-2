import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './components/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleSignIn from './components/authorization/googleSignIn.jsx';
import AdditionalInformation from './components/authorization/additionalInformation.jsx';

// create root node and render App to it
const node = document.getElementById('app');
const root = createRoot(node);
root.render(<App />);