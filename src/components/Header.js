// components/Header.js
import React, { forwardRef } from 'react';
import '../styles/header.css'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


const Header = forwardRef((props, ref) => {

    const windowWidth = props.windowWidth;
    const currentSection = props.currentSection;

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <header ref={ref} className='Header' id='Header'>

        <nav id='NavBar'>
                <a href='https://www.andrewgarnier.fr' id="Logo"></a>
            {
                windowWidth > 800 ?

            <div id='Navigation'>
              <button onClick={() => scrollToSection('Header')} className={currentSection === 'Header' ? 'currentSection' :''}>Home</button>
                <button onClick={() => scrollToSection('About')} className={currentSection === 'About' ? 'currentSection' :''}>A propos</button>
                <button onClick={() => scrollToSection('Projects')} className={currentSection === 'Projects' ? 'currentSection' :''}>Projets</button>
                <button onClick={() => scrollToSection('Stack')} className={currentSection === 'Stack' ? 'currentSection' :''}>Stack</button>
                <button onClick={() => scrollToSection('Footer')} className={currentSection === 'Footer' ? 'currentSection' :''}>Footer</button>
            </div>
            :<div id='NavigationPhone'>
            <button onClick={() => scrollToSection('Header')} className={currentSection === 'Header' ? 'currentSection' :''} ><div id='HomeButton'></div></button>
              <button onClick={() => scrollToSection('About')} className={currentSection === 'About' ? 'currentSection' :''}  ><div id='AboutButton'></div></button>
              <button onClick={() => scrollToSection('Projects')} className={currentSection === 'Projects' ? 'currentSection' :''}  ><div id='ProjectsButton'></div></button>
              <button onClick={() => scrollToSection('Stack')} className={currentSection === 'Stack' ? 'currentSection' :''}  ><div id='SkillsButton'></div></button>
              <button onClick={() => scrollToSection('Footer')} className={currentSection === 'Footer' ? 'currentSection' :''}  ><div id='ContactButton'></div></button>
          </div>
            }
            <div id='DisplayMode'>
                <div></div>
                <div>FR</div>
            </div>
        </nav>

        <main id='Presentation'>
            <div className="TitleContainer">
                <div className="Title">
                    <h1>Developpeur web</h1>
                </div>
                <div className="Line"></div>
                <div className="Text">
                  <p>Concevoir et développer des expériences web uniques.</p>
                </div>
                <div>
                  <button className="link">
                    <a href="https://github.com/Amylos" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="icon" /> <span>GitHub</span>
                    </a>
                  </button>
                  <button className="link">
                    <a href="https://www.linkedin.com/in/andrew-garnier-820166282/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="icon" /> <span>LinkedIn</span>
                    </a>
                  </button>
                  <button className="link">
                    <a href="mailto:andrewgarnier@gmail.com">
                      <FaEnvelope className="icon" /> <span>andrewgarnier@gmail.com</span>
                    </a>
                  </button>
                </div>
              </div>
        </main>

    </header>
  );
});

export default Header;