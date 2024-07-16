import React, { forwardRef } from 'react';
import '../styles/footer.css';
import { FaLinkedin, FaGithub,FaEnvelope } from 'react-icons/fa'; // Importer les icônes de LinkedIn et GitHub

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className='Footer' id="Footer">
      <div className='footerImg'></div>
      <div className="footer-content">
        <div className='ContactSection'>

        <div className="links-container">
          <h2>ME CONTACTER</h2>
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
            </div>
            <div className="email-container">
                <button className="link">
                    <a href="mailto:andrewgarnier@gmail.com">
                        <FaEnvelope className="icon" /> <span>andrewgarnier@gmail.com</span>
                    </a>
                </button>
            </div>
        </div>
        <h1>By Andrew Garnier.</h1>
        <p className='CopyRight'>&copy; {new Date().getFullYear()} Andrew Garnier. Tous droits réservés.</p>
      </div>
    </footer>
  );
});

export default Footer;
