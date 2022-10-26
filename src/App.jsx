import React from 'react';
import { Routes, Route } from "react-router-dom";
import './scss/index.scss';

import Home from './components/Home';
import Header from './components/Header';
import MovieDetail from './components/MovieDetail';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';


const App = () => {
   return (
      <div className="app">
         <Header />
         <div className="container">
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/movie/:imdbID' element={<MovieDetail />} />
               <Route path='*' element={<PageNotFound />} />
            </Routes>
         </div>
         <Footer />
      </div>
   );
};

export default App;
