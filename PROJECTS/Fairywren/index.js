import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
 

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
   
    
  ,
  document.getElementById('root')
);