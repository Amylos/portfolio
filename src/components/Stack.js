// components/Stack.js
import React, { forwardRef } from 'react';
import '../styles/stack.css'

const Stack = forwardRef((props, ref) => {
  return (
    <section ref={ref} className='Stack' id='Stack'>

      <div className='StackEnTete'>
        <h1 className='StackTtitle'>Technologies</h1>
        <div className="StackLine"></div>
      </div>

      <div className='Technologies'>
        <div className='FrontEnd'>
          <div className='TechTitle'>
            <h2>Front-end</h2>
          </div>
          <div className='TechLogos'>
            <div className='Logos'><div className='Logo ReactIcon'></div></div>
            <div className='Logos'><div className='Logo TailwindIcon'></div></div>
            <div className='Logos SymfonyLogo'><div className='Logo SymfonyIcon'></div></div>
            <div className='Logos'><div className='Logo SQLIcon'></div></div>
          </div>
        </div>
        <div className='Systeme'>
          <div className='TechTitle'>
            <h2>Système et logiciel</h2>
          </div>
          <div className='TechLogos'>
            <div className='Logos'><div className='Logo DockerIcon'></div></div>
            <div className='Logos'><div className='Logo GitIcon'></div></div>
            <div className='Logos'><div className='Logo C'></div></div>
            <div className='Logos'><div className='Logo CC'></div></div>
            <div className='Logos'><div className='Logo ROS2'></div></div>
          </div>

        </div>
      </div>



    </section>
  );
});

export default Stack;

