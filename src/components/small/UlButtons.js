import React from 'react';
import './UlButtons.css'
const CVlink = "https://www.linkedin.com/in/viktor-agust%C3%ADn-luzny-41529617a/"

const UlButtons = ({ handlerFunction }) => {
    return (
        <div>
            <li className="first-li"><button name="aboutMe" title="ABOUT ME" onClick={handlerFunction}>ABOUT ME</button></li>
            <hr />
            <li><button name="myWork" title="MY WORK" onClick={handlerFunction}>MY WORK</button></li>
            <hr />
            <li><a title="LINKEDIN" href={CVlink} target="_blank" rel="noreferrer">LINKEDIN</a></li>
            <hr />
            <li><button title="CONTACT ME">CONTACT ME</button></li>
            <hr />
        </div>
    )
}

export default UlButtons;
