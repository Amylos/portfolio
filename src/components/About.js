// components/About.js


import React, { forwardRef,useEffect } from 'react';
import '../styles/about.css'

const About = forwardRef((props, ref) => {

    useEffect(()=>{
        const observer = new IntersectionObserver(entries =>{
            entries.forEach((entry) =>{
               if(entry.isIntersecting)  entry.target.classList.add('active');
            });
        });
        const elements = document.querySelectorAll('.Observe');

        elements.forEach((element) =>{
            observer.observe(element);
        });

        return() =>{
            observer.disconnect();
        }
    },[]);


  return (
    <section ref={ref} className='About' id="About">
        <div className="left-side">
            <div className='Block AboutOne'>
                <h1 className='Observe'>BLABLB</h1>
                <p className='Observe'>By ensuring that the currentSection state is correctly managed and updated, only one sell have the currentSection class at a By ensuring that the currentSection state is correctly managed and updated, only one section button will have bdkjqshbdfkjbgmqgion class at a time, eliminating the conffdssdsdflict where two sections appear activefdsfsdf simultaneously.time, eliminating the conflict where two sections appear active simultaneously.</p>
            </div>
            {/* <div className=' Block AboutTwo'>
                <h1 className='Observe'>BLBALBLA</h1>
                <p className='Observe'>By ensuring that the currentSection state is correctly managed and updated, only one section button will have the currentSection class at a time, eliminating the conflict where two sections appear active simultaneously.By ensuring that the currentSection state is correctly managed and updated, only one section button will have the currentSection class at a time, eliminating the conflict where two sections appear active simultaneously.</p>
            </div> */}
        </div>
        <div className="right-side Observe"></div>
    </section>
  );
});

export default About;
