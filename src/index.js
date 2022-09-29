import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom'; 
import { BrowserRouter } from 'react-router-dom';
import "react-alice-carousel/lib/alice-carousel.css";

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);