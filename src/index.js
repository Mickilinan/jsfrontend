import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ArtiklarProvider } from './components/Generics/ArticlesContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Style/App.css';


import Home from './views/Home';
import Contact from './views/Contact';
import News from './views/News';
import NewsDetails from './views/NewsDetails';
import NotFound from './views/NotFound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  
  <React.StrictMode>
    <ArtiklarProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/news/' element={<News />} />
      <Route path='/newsDetails/:id' element={<NewsDetails />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter> 
    </ArtiklarProvider>
  </React.StrictMode>
 
);
