import React, { useState, useEffect, useRef } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Footer from './components/Footer';
import About from './components/About';
import Animation from './components/Animation';

function App() {

  /***********************************/

  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const stackRef = useRef(null);
  const footerRef = useRef(null);

  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
          console.log(entry.target.id)
        }
      });
    }, { threshold: 0.5 });

    const sections = [headerRef, aboutRef, projectsRef, stackRef, footerRef];
    sections.forEach((section) => {
      if (section.current) {
        observer.observe(section.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
      observer.disconnect();
    };
  }, []);


  /***********************************/

  const [windowWidth,setWindowWidth] = useState(window.innerWidth);
  function checkWindowSize() {
      setWindowWidth(window.innerWidth);
  }
  window.addEventListener('resize', function() {
      checkWindowSize();
  });


  /***********************************/


  return (
    <div className="App">
      <Header ref={headerRef} currentSection={currentSection} windowWidth={windowWidth}/>
      <About ref={aboutRef}/>
      <Projects ref={projectsRef} />
      <Stack ref={stackRef} />
      <Footer ref={footerRef} />
    </div>
  );
}

export default App;
