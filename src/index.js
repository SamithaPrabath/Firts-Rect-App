import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from './App2';
import {App2Test} from './App2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App2Test/>
  </React.StrictMode>
);

const root1=ReactDOM.createRoot(document.getElementById("root1"));
root1.render(
  <React.StrictMode>
    <App2/>
    <App2Test/>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
