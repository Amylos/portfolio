import React, { forwardRef, useState, useRef,useEffect } from 'react';
import { FaArrowRight,FaExternalLinkAlt   } from 'react-icons/fa';
import '../styles/projects.css';

const projects = [
  {
    id: 1,
    class:"EPH",
    title: 'Ephemeride',
    description: 'Application pour un spectacle interactif "12 Poèmes Numériques"',
    text: `Éphéméride est une application conçue pour être le compagnon de voyage lors du spectacle interactif "12 Poèmes Numériques". Elle offre aux spectateurs une expérience immersive en leur permettant d'interagir en direct avec le spectacle.
            . Les spectateurs deviennent acteur de leur spectacle.`,
    lien: 'https://app.petitenature.fr/EPH',
    video: 'https://www.youtube.com/watch?v=eD5JU7V3-WI',
    photo: '../media/images/',
    stack: ['React', 'PHP', 'MySQL'],
    client: 'La Compagnie Petite Nature',
    type: 'Projet Web',
    rapport:''
  },
  {
    id: 2,
    class:"ROVER",
    title: 'Marauder',
    description: 'Développement des modules de pilotage pour un rover',
    text: `Le Marauder est un projet visant à développer un système de pilotage pour un rover,
            permettant d'explorer les technologies robotiques. Son objectif est de fournir des solutions
            pour enseigner les techniques spatiales aux ingénieurs.`,
    lien: 'http://git.lycee-bourdelle.fr/Garnier/dynamixelsdk',
    video: 'https://www.youtube.com/watch?v=rCWNg7uB7ZY',
    photo: '../media/images/',
    stack: ['C++', 'Python', 'ROS2'],
    client: ' le CNES',
    type: 'Projet Embarqué',
    rapport:''
  },
  // {
  //   id: 3,
  //   class:"CMS",
  //   title: `Mon portfolio`,
  //   description: 'Première version de mon portfolio',
  //   text: `Vous êtes actuellement sur la première version de mon portfolio que j'ai fait fin Juillet 2024`,
  //   lien: '',
  //   video: null,
  //   stack: ['React'],
  //   client: 'Projet de licence',
  //   type: 'Projet Web',
  //   rapport:''
  // },
];





const Projects = forwardRef((props, ref) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectDetailsRef = useRef(null);

  const handleClickProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = (event) => {
    if (projectDetailsRef.current && projectDetailsRef.current.contains(event.target)) {
      return;
    }
    setSelectedProject(null);
  };

    const openPDF = () => {
      window.open('../media/videos/AGCV.pdf', '_blank');
    };



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
    <section ref={ref} className='Projects' id='Projects'>
      <h1 id='TitleProjects'>Projets selectionnes</h1>
      <div className="StackLine"></div>
      <div id='SelectedProjects'>
        {projects.map(project => (
          <div className='Project Observe' key={project.id} onClick={() => handleClickProject(project)}>
            <div className={`ProjectImg ${project.class} `}>
              <div className='ProjectAnimation'></div>
            </div>
            <div className='ProjectInfos'>
              <h3 className='ProjectTitle'>{project.title}</h3>
              <p className='ProjectText'><span>{project.type}</span></p>
              <p className='ProjectShow'><span>Show <FaArrowRight size={10} color="grey" className="custom-icon" /></span></p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="ProjectDetailsOverlay" onClick={handleCloseProject}>
          <div className="ProjectDetailsContainer" ref={projectDetailsRef}>

            <div className='ProjectDetailsContainerLeft'>
              <div className='PartOne'>
                <h2 className="ProjectDetailsTitle">{selectedProject.title}</h2>
              </div>
              <div className='PartTwo'>
                <p className="ProjectDetailsDescription">{selectedProject.text}</p>
                {/* <p className="ProjectDetailsClient">Projet réalisé pour {selectedProject.client}</p> */}
              </div>
              <div className='PartThree'>
              <p className="ProjectDetailsClient">Projet réalisé pour <strong>{selectedProject.client}</strong> </p>

              <a  className='LinkProject' href={selectedProject.lien} target='blank'>Visiter <FaExternalLinkAlt  /></a>
              </div>
            </div>
            <div className='ProjectDetailsContainerRight'>

            {selectedProject.video && selectedProject.video.includes('youtube.com') ? (
              <div className="ProjectDetailsVideo">
                <iframe
                  className='Frame'
                  src={selectedProject.video.replace('watch?v=', 'embed/')}
                  title={selectedProject.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : selectedProject.video && (
              <p className="ProjectDetailsVideo">
                <video controls>
                  <source src={selectedProject.video} type="video/mp4" />
                  Votre navigateur ne prend pas en charge la lecture vidéo.
                </video>
              </p>
            )}

            {selectedProject.stack.length > 0 && (
              <div className="ProjectDetailsStack">
                <ul>
                  {selectedProject.stack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}

            </div>

          </div>
        </div>
      )}
    </section>
  );
});

export default Projects;
