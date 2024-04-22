import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Speaker from './components/Speaker';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Speaker />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;