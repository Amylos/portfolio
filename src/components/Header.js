// components/Header.js
import React, { forwardRef } from 'react';
import '../styles/header.css'

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
                <a href='wwww.andrewgarnier.fr' id="Logo"></a>
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
                <div>A</div>
                <div>FR</div>
            </div>
        </nav>

        <main id='Presentation'>
                <div class="TitleContainer">
                    <div class="Title">
                        <h1>Developpeur web</h1>
                    </div>
                    <div class="Line"></div>
                    <div class="Text">
                        <p>I work with forward-thinking people to design and <strong>build</strong> interactive, accessible websites and products. From working on projects for likes of Aardman Animations, UNHCR, RNLI, and Honda, to working at startups in Tokyo, I've devoted more than a decade to making the web a little bit brighter.</p>
                    </div>
                 </div>
        </main>

    </header>
  );
});

export default Header;