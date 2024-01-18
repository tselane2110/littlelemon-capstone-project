import './App.css';
import React from 'react';
import Main from './components/main/Main.js';
import Footer from './components/footer/Footer.js'
import Nav from './components/nav/Nav.js';

function App() {

  return (
    <div className='container'>
      <Nav />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;