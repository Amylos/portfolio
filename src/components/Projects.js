// components/Projects.js
import React, { forwardRef,useRef,useEffect,useState } from 'react';
import '../styles/projects.css'

const Projects = forwardRef((props, ref) => {

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


  return (
    <section ref={ref} className='Projects' id='Projects'>

            <h1>Projets selectionnes</h1>

            <div className='SectionContainer'>
                <div className="SectionInfos">
                    <div className="Section">
                    <div className="SectionAnimated" onClick={toggleProject}>
                        <p className='ProjectName'>Project Name</p>
                        <p className='ProjectDescription'>Project Description</p>
                    </div>
                    </div>
                    <ul className='StackUsed'>
                        <li>React JS</li>
                        <li>Strapi</li>
                        <li>MySQL</li>
                        <li>PHP</li>
                        <li>webSocket</li>
                    </ul>
                </div>

                <div className="SectionInfos">
                    <div className="Section">
                    <div className="SectionAnimated" onClick={toggleProject}>
                        <p className='ProjectName'>Project Name</p>
                        <p className='ProjectDescription'>Project Description</p>
                    </div>
                    </div>
                    <ul className='StackUsed'>
                        <li>React JS</li>
                        <li>Strapi</li>
                        <li>MySQL</li>
                        <li>PHP</li>
                        <li>webSocket</li>
                    </ul>
                </div>

                <div className="SectionInfos">
                    <div className="Section">
                    <div className="SectionAnimated" onClick={toggleProject}>
                        <p className='ProjectName'>Project Name</p>
                        <p className='ProjectDescription'>Project Description</p>
                    </div>
                    </div>
                    <ul className='StackUsed'>
                        <li>React JS</li>
                        <li>Strapi</li>
                        <li>MySQL</li>
                        <li>PHP</li>
                        <li>webSocket</li>
                    </ul>
                </div>

                

            </div>


            <div className={isProjectOpen ? 'ProjectBackgroundDisplayed' : 'ProjectBackground'} >
            <div className={isProjectOpen ? 'ProjectDisplayed' : 'Project'}  ref={projectRef}>
                {isProjectOpen && <p></p>}
            </div>
        </div>


    </section>
  );
});

export default Projects;
