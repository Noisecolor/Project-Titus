import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

console.log("Index.js is loaded");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

console.log("ReactDOM.render executed");
