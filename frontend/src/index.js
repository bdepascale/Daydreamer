import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css'; //file from Bootswatch (Free Themes) https://bootswatch.com/
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
