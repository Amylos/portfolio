// components/Stack.js
import React, { forwardRef,useEffect } from 'react';
import '../styles/stack.css'

const Stack = forwardRef((props, ref) => {


  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    });

    const elements = document.querySelectorAll('.Observe');
    elements.forEach(element => {
        observer.observe(element);
    });

    return () => {
        observer.disconnect();
    };
}, []);

  return (
    <section ref={ref} className='Stack' id='Stack'>

      <div className='StackEnTete'>
        <h1 className='StackTtitle'>Technologies</h1>
        <div className="StackLine"></div>
      </div>

      <div className='Technologies'>
        <div className='DevWeb Observe'>
          <div className='TechTitle'>
            <h2>Développement web</h2>
          </div>
          <div className='TechLogos'>
            <div className='Logos'><div className='Logo ReactIcon'></div></div>
            <div className='Logos'><div className='Logo TailwindIcon'></div></div>
            <div className='Logos SymfonyLogo'><div className='Logo SymfonyIcon'></div></div>
            <div className='Logos'><div className='Logo SQLIcon'></div></div>
          </div>
        </div>
        <div className='Systeme Observe'>
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

