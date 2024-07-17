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
                    <h1 className='Observe'>Qui suis-je ?</h1>
                    <p className='Observe'>À 26 ans, je suis en quête d'une alternance, ayant repris mes études il y a trois ans après une reconversion professionnelle. Passionné par la création de sites et d'applications à partir d'idées originales, je trouve que ce domaine offre un potentiel créatif fascinant, il représente pour moi un monde de possibilités infinies.</p></div>
                <button className="link" onClick={handleDownload}>
                    <FaFileAlt className="icon" /> <span> Télécharger mon CV</span>
                </button>
            </div>
            <div className="right-side Observe"></div>
        </section>
    );
});

export default About;
