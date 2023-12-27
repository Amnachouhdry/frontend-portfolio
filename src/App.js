import React from 'react';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact'
import Footer from './Footer';

const App =() =>{

  return (
    <div className='App'>
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
