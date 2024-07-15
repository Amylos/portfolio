// components/Stack.js
import React, { forwardRef } from 'react';
import '../styles/stack.css'

const Stack = forwardRef((props, ref) => {
  return (
    <section ref={ref} className='Stack' id='Stack'>

        <h1>Stack Developpeur</h1>
      <div className='StackContainer'>
          <div className='StackLogo'>
              <div className='Logo ReactIcon'></div>
              <div className='Logo SymfonyIcon'></div>
              <div className='Logo SQLIcon'></div>
              <div className='Logo DockerIcon'></div>
              <div className='Logo GitIcon'></div>
              <div className='Logo TailwindIcon'></div>
          </div>
          <div id="Fusee">
          </div>

          
      </div>
    </section>
  );
});

export default Stack;

