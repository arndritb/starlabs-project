import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// import {Anchor} from 'antd';

// const {Link} = Anchor;

//components
import NavBar from './Components/NavBar';
import Home from './Components/Pages/Home';
import Skills from './Components/Pages/Skills';
import Work from './Components/Pages/Work';
import Contact from './Components/Pages/Contact';
import Data from './Components/Pages/Data';

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
                <Route exact path="/work" element={<Work />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/data" element={<Data />} />
              </Routes>
            </div>
          </Router>
{/* 
          <NavBar />

          <Router>
          <Routes>
            <Link href="/" title='Home' />
            <Link href="/skills" title='skills' />
            <Link href="/work" title='work' />
            <Link href="/contact" title='contact' />
            </Routes>
          </Router> */}

    </>
  );
}

export default App;