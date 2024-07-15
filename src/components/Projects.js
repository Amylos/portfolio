// components/Projects.js
import React, { forwardRef,useRef,useEffect,useState } from 'react';
import '../styles/projects.css'




const projects = [
  {

  },
]



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

    const toggleProject = (project) => {
      setIsProjectOpen(project);
    };

  return (
    <section ref={ref} className='Projects' id='Projects'>

            <h1 id='TitleProjects'>Projets selectionnes</h1>
            <div id='SelectedProjects'>
                  <div className='Project'>
                    <div className='ProjectImg'>
                      <div className='ProjectAnimation'></div>
                    </div>
                    <div className='ProjectInfos'>
                       <h2 className='ProjectTitle'>Titre</h2>
                       <p className='ProjectText'>Text</p>
                       <p className='ProjectShow'>Show</p>
                    </div>
                  </div>
                  <div className='Project'>
                    <div className='ProjectImg'>
                      <div className='ProjectAnimation'></div>
                    </div>
                    <div className='ProjectInfos'>
                       <h2 className='ProjectTitle'>Titre</h2>
                       <p className='ProjectText'>Text</p>
                       <p className='ProjectShow'>Show</p>

                    </div>
                  </div>

                  <div className='Project'>
                    <div className='ProjectImg'>
                      <div className='ProjectAnimation'></div>
                    </div>
                    <div className='ProjectInfos'>
                       <h2 className='ProjectTitle'>Titre</h2>
                       <p className='ProjectText'><span>Text</span></p>
                       <p className='ProjectShow'><span>Show</span></p>
                    </div>
                  </div>
            </div>


















            

            {/* <div className='SectionContainer'> */}
                {/* <div className="SectionInfos"> */}
                    {/* <div className="Section EPH">
                    <div className="SectionAnimated" onClick={() => toggleProject('EPH')}>
                        <h1 className='ProjectName'>Ephemeride</h1>
                        <p className='ProjectDescription'>Création d'une application web pour un spectacle intéractif</p>
                    </div>
                    </div> */}
                    {/* <ul className='StackUsed'>
                        <li>React JS</li>
                        <li>Strapi</li>
                        <li>MySQL</li>
                        <li>PHP</li>
                        <li>webSocket</li>
                    </ul> */}
                {/* </div> */}

                {/* <div className="SectionInfos">
                    <div className="Section CNES">
                      <div className="SectionAnimated" onClick={() => toggleProject('CNES')}>
                          <h1 className='ProjectName'>Projet Marauder</h1>
                          <p className='ProjectDescription'>Développement des commandes de pilotage des moteurs pour un rover du CNES</p>
                      </div>
                    </div>
                    <ul className='StackUsed'>
                        <li>ROS2</li>
                        <li>C</li>
                        <li>C++</li>
                        <li>Python</li>
                    </ul>
                </div> */}

                {/* <div className="SectionInfos">
                    <div className="Section GAP">
                    <div className="SectionAnimated" onClick={() => toggleProject('GAP')}>
                        <h1 className='ProjectName'>Gestionnaire d'article personnalise</h1>
                        <p className='ProjectDescription'>Création d'un mini CMS pour des articles</p>
                    </div>
                    </div>
                    <ul className='StackUsed'>
                        <li>React JS</li>
                        <li>Symfony</li>
                    </ul>
                </div> */}

            {/* </div> */}

            {/* <div className={isProjectOpen ? 'ProjectBackgroundDisplayed' : 'ProjectBackground'} > */}
            {/* {
              isProjectOpen === 'EPH' ?
              <div className={isProjectOpen ? 'ProjectDisplayed' : 'Project'}  ref={projectRef}>
              </div>
              :
              isProjectOpen === 'CNES' ?
              <div className={isProjectOpen ? 'ProjectDisplayed' : 'Project'}  ref={projectRef}>
            </div>
            :
            isProjectOpen === 'GAP' ?
            <div className={isProjectOpen ? 'ProjectDisplayed' : 'Project'}  ref={projectRef}>
        </div>

              : null
            } */}
        {/* </div> */}


    </section>
  );
});

export default Projects;
