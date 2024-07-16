import React, { forwardRef, useState, useRef } from 'react';
import '../styles/projects.css';

const projects = [
    {
        id: 1,
        title: 'Ephemeride',
        description: 'Description du projet 1...',
        lien:'',
        video:'',
        photo:'',
        stack:[],
    },
    {
        id: 2,
        title: 'Projet 2',
        description: 'Description du projet 2...',
    },
    {
        id: 3,
        title: 'Projet 3',
        description: 'Description du projet 3...',
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
            return; // Ne rien faire si l'élément cliqué est à l'intérieur de ProjectDetailsContainer
        }
        setSelectedProject(null);
    };

    return (
        <section ref={ref} className='Projects' id='Projects'>
            <h1 id='TitleProjects'>Projets selectionnes</h1>
            <div id='SelectedProjects'>
                {projects.map(project => (
                    <div className='Project' key={project.id} onClick={() => handleClickProject(project)}>
                        <div className='ProjectImg'>
                            <div className='ProjectAnimation'></div>
                        </div>
                        <div className='ProjectInfos'>
                            <h2 className='ProjectTitle'>{project.title}</h2>
                            <p className='ProjectText'><span>{project.description}</span></p>
                            <p className='ProjectShow'><span>Show</span></p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="ProjectDetailsOverlay" onClick={handleCloseProject}>
                    <div className="ProjectDetailsContainer" ref={projectDetailsRef}>
                        <h2 className="ProjectDetailsTitle">{selectedProject.title}</h2>
                        <p className="ProjectDetailsDescription">{selectedProject.description}</p>
                    </div>
                </div>
            )}
        </section>
    );
});

export default Projects;
