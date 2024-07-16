import React, { forwardRef } from 'react';
import '../styles/footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importer les icônes de LinkedIn et GitHub

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className='Footer' id="Footer">
      <div className='footerImg'></div>
      <div className="footer-content">
        <div className="contact-info">
          <h3>Me Contacter</h3>
          <p>Lien vers le mail : <a href="mailto:andrewgarnierpro@gmail.com">andrewgarnierpro@gmail.com</a></p>
        </div>
        <div className="social-links">
          <h3>Réseaux Sociaux</h3>
          <ul>
            <li><a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a></li>
            <li><a href="https://github.com/tonprofil" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a></li>
          </ul>
        </div>
        <p>&copy; {new Date().getFullYear()} Andrew Garnier. Tous droits réservés.</p>
      </div>
    </footer>
  );
});

export default Footer;
