import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import style from './index.css'

//Pages
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Agenda from './components/pages/Agenda';
import Contato from './components/pages/Contato';
import Loja from './components/pages/Loja';
import PageNotFound from './components/pages/PageNotFound';

//Components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import React from 'react';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='*' element={<PageNotFound/>} />
        <Route path='/' element={<Home/>} />
        {/* <Route path='/sobre' element={<Sobre/>} />
        <Route path='/agenda' element={<Agenda/>} />
        <Route path='/contato' element={<Contato/>} />
        <Route path='/loja' element={<Loja/>} /> */}
      </Routes>
      <Footer />
   </>
  );
}

export default App;
