import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyOldSkool from './components/WhyOldSkool';
import Plans from './components/Plans';
import Results from './components/Results';
import Achievements from './components/Achievements';
import Trainers from './components/Trainers';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyOldSkool />
      <Plans />
      <Results />
      <Achievements />
      <Trainers />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;