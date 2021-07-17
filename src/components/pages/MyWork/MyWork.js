import React from 'react';
import './MyWork.css'
import '../../css/cybrTheme.css'
import rentCarImg from './img/rent-a-car.png'

const MyWork = () => {
    return (
        <div className="box my-work-box wrapper">
            <div className="grid-1">
                <img src={rentCarImg} alt="rent car" className="img-grid"></img>
            </div>
            <div className="grid-2">
            <img src={rentCarImg} alt="rent car" className="img-grid"></img>
            </div>
            <div className="grid-3">
            <img src={rentCarImg} alt="rent car" className="img-grid"></img>
            </div>
            <div className="grid-4">
            <img src={rentCarImg} alt="rent car" className="img-grid"></img>
            </div>
            <div className="grid-5">
            <img src={rentCarImg} alt="rent car" className="img-grid"></img>
            </div>
            <div className="grid-6">
            <img src={rentCarImg} alt="rent car" className="img-grid"></img>
            </div>
            <div className="grid-7">
            <img src={rentCarImg} alt="rent car" className="img-grid"></img>
            </div>
            <div className="grid-8">
            <img src={rentCarImg} alt="rent car" className="img-grid"></img>
            </div>
            <div className="grid-9">
            <img src={rentCarImg} alt="rent car" className="img-grid"></img>
            </div>
        </div>
    )
}

export default MyWork;