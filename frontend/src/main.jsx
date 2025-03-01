import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Ensure this is the correct path
import './App.css';  // Ensure your global styles are imported

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
