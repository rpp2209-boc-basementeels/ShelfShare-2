import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './components/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const node = document.getElementById('app');
const root = createRoot(node);
root.render(<App />);