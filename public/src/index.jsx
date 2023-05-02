import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { createRoot } from 'react-dom/client';

// Render the App component
//ReactDOM.render(<App />, document.getElementById('root'));

const node = document.getElementById('app');
const root = createRoot(node);
root.render(<App />);