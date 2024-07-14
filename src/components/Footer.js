// components/Footer.js


import React, { forwardRef } from 'react';
import '../styles/footer.css'

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className='Footer' id="Footer">
      <h1>Footer Section</h1>
    </footer>
  );
});

export default Footer;
