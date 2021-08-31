import React from 'react';
import './MyWork.css'
import '../../css/cybrTheme.css'
import rentCarImg from './img/rent-a-car.png'

const NothingHere = () => {
    return (
        <div className="nothing-here-container textcybrborder">
            <h2 className="cyberpunk glitched">Proximamente!</h2>
        </div>
    )
};

const MyWork = () => {
    return (
        <div className="work-container">
            <div className="container-1 projects-title">
                <h1 className="cyberpunk">Mis proyectos</h1>
            </div>

            <div className="my-work-box wrapper">
                <div className="grid-1 grid-is-centered work-box">
                    <img src={rentCarImg} alt="rent car" className="img-grid"></img>
                    <div className="project-links-1 links-overlay">
                        <a href="https://www.youtube.com/playlist?list=PLROIQdlFrORqtQ8P_Y9BN93bJYiNfXH1m" target="_blank" rel="noreferrer" className="project-links-style" title="DEMO">DEMO</a>
                    </div>
                    <div className="project-links-2 links-overlay">
                        <a href="https://github.com/Ja-boop/rent-a-car" target="_blank" rel="noreferrer" className="project-links-style" title="GITHUB">GITHUB</a>
                    </div>
                </div>
                <div className="grid-2 grid-is-centered work-box">
                    <NothingHere />
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