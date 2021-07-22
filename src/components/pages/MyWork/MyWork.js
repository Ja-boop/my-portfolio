import React from 'react';
import './MyWork.css'
import '../../css/cybrTheme.css'
import rentCarImg from './img/rent-a-car.png'
import nothingHereImg from './img/rent-a-car.png'

const MyWork = () => {
    return (
        <div className="my-work-box wrapper">
            <div className="grid-1 grid-is-centered">
                <img src={rentCarImg} alt="rent car" className="img-grid"></img>
                <div className="project-links-1 links-overlay">
                    <a href="https://www.w3schools.com" target="_blank" rel="noreferrer" className="project-links-style" title="DEMO">DEMO</a>
                </div>
                <div className="project-links-2 links-overlay">
                    <a href="https://github.com/Ja-boop/rent-a-car" target="_blank" rel="noreferrer" className="project-links-style" title="GITHUB">GITHUB</a>
                </div>
            </div>
            <div className="grid-2 grid-is-centered">
                <h1 className="nothing-here">Nothing Here</h1>
            </div>
            <div className="grid-3 grid-is-centered">
                <h1 className="nothing-here">Nothing Here</h1>
            </div>
            <div className="grid-4 grid-is-centered">
                <h1 className="nothing-here">Nothing Here</h1>
            </div>
            <div className="grid-5 grid-is-centered">
                <h1 className="nothing-here">Nothing Here</h1>
            </div>
            <div className="grid-6 grid-is-centered">
                <h1 className="nothing-here">Nothing Here</h1>
            </div>
            <div className="grid-7 grid-is-centered">
                <h1 className="nothing-here">Nothing Here</h1>
            </div>
            <div className="grid-8 grid-is-centered">
                <h1 className="nothing-here">Nothing Here</h1>
            </div>
            <div className="grid-9 grid-is-centered">
                <h1 className="nothing-here">Nothing Here</h1>
            </div>
        </div>
    )
}

export default MyWork;