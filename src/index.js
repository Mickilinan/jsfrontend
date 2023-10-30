import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './views/Home';
import Contact from './views/Contact';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
 
    
  </React.StrictMode>
);
