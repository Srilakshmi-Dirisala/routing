import React from 'react';
import './App.css';
import Head from './components/Head';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Matter from './components/Matter';




function App() {
  return (
    <div>
      
      <Router>
        <Head></Head>
        <Routes>
          <Route path='/Matter' element={<Matter/>}/>
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Signup' element={<Signup />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;