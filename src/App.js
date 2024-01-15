import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js'
import Nav from './components/Nav.js';

function App() {
  return (
    <div className='container'>
      <div>
      <Header/>
      <Nav />
      </div>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
