import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


//components
import NavBar from './Components/NavBar';
import Home from './Components/Pages/Home';
import Skills from './Components/Pages/Skills';
import Work from './Components/Pages/Work';
import Contact from './Components/Pages/Contact';


function App() {

  // const cards = data.map(item => {
  //   return(
      // <Skills 
      //   key={item.id}
      //   {...item}
      // />
  //   )
  // })


  return (
    <>
        <Router>
            <NavBar />

            <div className='pages'>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/skills" element={<Skills />} />
                {/* <Route exact path="/skills" element={<section className='card--list'>
                  {cards}
                </section>} /> */}
                <Route exact path="/work" element={<Work />} />
                <Route exact path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </Router>

    </>
  );
}

export default App;