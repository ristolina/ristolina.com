import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Experience from '../Experience/Experience';

function App() {
  return (
    <div className="App">
      <div className="cover bg-left bg-center-l animated fadeIn" id="cover-bg">
        <Header />
        <Experience />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
