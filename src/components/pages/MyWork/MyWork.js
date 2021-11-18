import React from 'react';
import './MyWork.css';
import '../../css/cybrTheme.css';
import rentCarImg from './img/rent-a-car.png';
import pokedexReactImg from './img/pokedex-react.png';

const firstProject = {
    image: rentCarImg,
    alt: 'rent a car',
    demo: 'https://www.youtube.com/playlist?list=PLROIQdlFrORqtQ8P_Y9BN93bJYiNfXH1m',
    github: 'https://github.com/Ja-boop/rent-a-car'
};

const secondProject = {
    image: pokedexReactImg,
    alt: 'pokedex',
    demo: 'https://ja-boop.github.io/pokedex-react/',
    github: 'https://github.com/Ja-boop/pokedex-react',
};

const NothingHere = () => {
    return (
        <div className="nothing-here-container textcybrborder">
            <h2 className="cyberpunk glitched">¡Próximamente!</h2>
        </div>
    )
};

const Project = (props) => {
    return (
        <React.Fragment>
            <img src={props.image} alt={props.alt} className="img-grid"></img>
            <div className="project-links-1 links-overlay">
                <a href={props.demoLink} target="_blank" rel="noreferrer" className="project-links-style" title="DEMO">DEMO</a>
            </div>
            <div className="project-links-2 links-overlay">
                <a href={props.githubLink} target="_blank" rel="noreferrer" className="project-links-style" title="GITHUB">GITHUB</a>
            </div>
        </React.Fragment>
    )
}

const MyWork = () => {
    return (
        <div className="work-container">
            <div className="container-1 projects-title">
                <h1 className="cyberpunk">Mis proyectos</h1>
            </div>

            <div className="my-work-box wrapper">
                <div className="grid-1 grid-is-centered work-box">
                    <Project image={firstProject.image} alt={firstProject.alt} demoLink={firstProject.demo} githubLink={firstProject.github} />
                </div>
                <div className="grid-2 grid-is-centered work-box">
                    <Project image={secondProject.image} alt={secondProject.alt} demoLink={secondProject.demo} githubLink={secondProject.github} />
                </div>
                <div className="grid-3 grid-is-centered work-box">
                    <NothingHere />
                </div>
                <div className="grid-4 grid-is-centered work-box">
                    <NothingHere />
                </div>
                <div className="grid-5 grid-is-centered work-box">
                    <NothingHere />
                </div>
                <div className="grid-6 grid-is-centered work-box">
                    <NothingHere />
                </div>
            </div>
        </div>
    )
};

export default MyWork;