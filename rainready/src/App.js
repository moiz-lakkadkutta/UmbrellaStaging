// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-rainready-50">
      <Header />
      <About />
      <Services />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;