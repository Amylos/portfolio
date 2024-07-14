import '../styles/animation.css'

import React, { useState,useEffect,useRef } from 'react';

const Animation = () => {

    /****/
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


    const email = "example@example.com";

    /****/


    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };



    /****/
    const [isProjectOpen, setIsProjectOpen] = useState(false);
    const projectRef = useRef(null);

    useEffect(() => {
      function handleClickOutside(event) {
        if (projectRef.current && !projectRef.current.contains(event.target)) {
          setIsProjectOpen(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    const toggleProject = () => {
      setIsProjectOpen(!isProjectOpen);
    };

    /*****/




    return (
        <div className="Animation">

            {/* <header className='Header'>
                <div class="TitleContainer">
                    <div class="Title">
                        <h1> Andrew Garnier</h1>
                    </div>
                    <div class="Line"></div>
                    <div class="Text">
                        <p>I work with forward-thinking people to design and <strong>build</strong> interactive, accessible websites and products. From working on projects for likes of Aardman Animations, UNHCR, RNLI, and Honda, to working at startups in Tokyo, I've devoted more than a decade to making the web a little bit brighter.</p>
                    </div>
                 </div>
                 <div className='Photo'></div>
            </header> */}


            <div className='SectionContainer'>
                <div className="Section">
                    <div className="SectionAnimated" onClick={toggleProject}>
                        <p className='ProjectName'>Project Name</p>
                        <p className='ProjectDescription'>Project Description</p>
                    </div>
                </div>

                <div className="Section" onClick={toggleProject}>
                    <div className="SectionAnimated">
                        <p className='ProjectName'>Project Name</p>
                        <p className='ProjectDescription'>Project Description</p>
                    </div>
                </div>

                <div className="Section" onClick={toggleProject}>
                    <div className="SectionAnimated">
                        <p className='ProjectName'>Project Name</p>
                        <p className='ProjectDescription'>Project Description</p>
                    </div>
                </div>
            </div>


            <div className={isProjectOpen ? 'ProjectBackgroundDisplayed' : 'ProjectBackground'} >
            <div className={isProjectOpen ? 'ProjectDisplayed' : 'Project'}  ref={projectRef}>
                {isProjectOpen && <p></p>}
            </div>


            <div className='Like'></div>

        </div>


            {/*  */}

            <div className='Stack'>
                <div className='Logo ReactIcon'></div>
                <div className='Logo SymfonyIcon'></div>
                <div className='Logo SQLIcon'></div>
            </div>

            {/*  */}

            <div className='TextContainer'>
                <h1 className='Title Observe'>Title</h1>
                <p className='Text One Observe'>I've built products for companies and businesses around the globe ranging from markeusinesses around usinesses around usinesses around usinesses around ting websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.</p>
                <p className='Text Two Observe'>I've built products for comusinesses around usinesses around usinesses around usinesses around usinesses around panies andusinesses around  businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.</p>
                <p className='Text Three Observe'>I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.</p>
                <p className='Text Four Observe'>I've built products for companies and busineusinesses around usinesses around usinesses around usinesses around sses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.</p>
                <p className='Text Five Observe'>I've built products for companies and businesses around the globe ranging from marketing wusinesses around usinesses around usinesses around usinesses around ebsites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.</p>
                <p className='Text Six Observe'>I've built products for companies and businesses around theusinesses around usinesses around usinesses around usinesses around  globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.</p>
                <a href={`mailto:${email}`}>{email}</a>




        <div className="TestScroll">
            <p>BLABLABMA</p>
        </div>

            </div>


      


        </div>
      );
}

export default Animation;