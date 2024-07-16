import React, { forwardRef, useEffect } from 'react';
import '../styles/about.css';
import { FaFileAlt } from 'react-icons/fa';

const About = forwardRef((props, ref) => {

    const handleDownload = (e) => {
        e.preventDefault();
        const url = '../media/videos/AGCV.pdf'; // Remplacez par le chemin correct vers votre fichier PDF
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'AGCV.pdf'); // Nom du fichier téléchargé
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        <section ref={ref} className='About' id="About">
            <div className="left-side">
                <div className='Block AboutOne'>
                    <h1 className='Observe'>BLABLB</h1>
                    <p className='Observe'>By ensuring that the currentSection state is correctly managed and updated, only one section button will have the currentSection class at a time, eliminating the conflict where two sections appear active simultaneously.</p>
                </div>
                <button className="link" onClick={handleDownload}>
                    <FaFileAlt className="icon" /> <span> Télécharger mon CV</span>
                </button>
            </div>
            <div className="right-side Observe"></div>
        </section>
    );
});

export default About;
