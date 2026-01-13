import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Results from './components/Results';
import Videos from './components/Videos';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import WhatsAppBtn from './components/WhatsAppBtn';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Results />
      <Videos />
      <Testimonials />
      <Contact />
      <Footer />
      <EnquiryModal />
      <WhatsAppBtn />
    </div>
  );
}

export default App;
