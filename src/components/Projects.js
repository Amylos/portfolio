import React, { forwardRef, useState, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/projects.css';

const projects = [
  {
    id: 1,
    class:"EPH",
    title: 'Ephémeride',
    description: 'Application pour un spectacle interactif "12 Poèmes Numériques"',
    text: '',
    lien: 'https://app.petitenature.fr/EPH',
    video: 'https://www.youtube.com/watch?v=eD5JU7V3-WI',
    photo: '../media/images/',
    stack: ['React', 'PHP', 'MySQL'],
    client: 'La compagnie petite nature',
    type: 'Projet Web',
    rapport:''
  },
  {
    id: 2,
    class:"ROVER",
    title: 'Marauder',
    description: 'Développement des modules de pilotage pour un rover',
    text: ' Développement des modules de pilotage pour un roverDéveloppement des modules de pilotage pour un roverDéveloppement des modules de pilotage pour un roverDéveloppement des modules de pilotage pour un roverDéveloppement des modules de pilotage pour un rover',
    lien: 'http://git.lycee-bourdelle.fr/Garnier/dynamixelsdk',
    video: 'https://www.youtube.com/watch?v=rCWNg7uB7ZY',
    photo: '../media/images/',
    stack: ['C++', 'Python', 'ROS2'],
    client: 'CNES',
    type: 'Projet Embarqué',
    rapport:''
  },
  {
    id: 3,
    class:"CMS",
    title: `Gestionnaire d'articles personnalise`,
    description: 'Application de type CMS pour la gestion d\'article',
    text: '',
    lien: '',
    video: null,
    photo: '../media/images/',
    stack: ['React', 'Symfony', 'MySQL'],
    client: 'Projet de licence',
    type: 'Projet Web',
    rapport:''
  },
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

  return (
    <section ref={ref} className='Projects' id='Projects'>
      <h1 id='TitleProjects'>Projets selectionnes</h1>
      <div id='SelectedProjects'>
        {projects.map(project => (
          <div className='Project' key={project.id} onClick={() => handleClickProject(project)}>
            <div className={`ProjectImg ${project.class} `}>
              <div className='ProjectAnimation'></div>
            </div>
            <div className='ProjectInfos'>
              <h2 className='ProjectTitle'>{project.title}</h2>
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
                <p className="ProjectDetailsClient">Projet réalisé pour le {selectedProject.client}</p>
              </div>
              <div className='PartThree'>
              <a  className='LinkProject' href={selectedProject.lien} target='blank'>Visiter</a>
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
