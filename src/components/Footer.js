import React, { forwardRef } from 'react';
import '../styles/footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importer les icônes de LinkedIn et GitHub

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className='Footer' id="Footer">
      <div className='footerImg'></div>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Andrew Garnier. Tous droits réservés.</p>
      </div>
    </footer>
  );
});

export default Footer;
