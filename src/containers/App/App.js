import React from 'react';
import logo from '../media/logo.png';
import './App.css';
import Header from '../Header/Header';
import Cover from '../Cover/Cover';
import About from '../About/About';
import Contact from '../Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Cover />
      <About />
      <Contact />
    </div>
  );
}

export default App;
