import React from 'react';
import './UlButtons.css'
const CVlink = "https://drive.google.com/file/d/1yW0j-lHdHhhwv_YZQRIoe5tH25SuOlHa/view"

const UlButtons = ({ handlerFunction }) => {
    return (
        <div>
            <li className="first-li"><button name="aboutMe" title="ABOUT ME" onClick={handlerFunction}>ABOUT ME</button></li>
            <hr />
            <li><button name="myWork" title="MY WORK" onClick={handlerFunction}>MY WORK</button></li>
            <hr />
            <li><a title="CV" href={CVlink} target="_blank" rel="noreferrer">CV</a></li>
            <hr />
            <li><button title="CONTACT ME">CONTACT ME</button></li>
            <hr />
        </div>
    )
}

export default UlButtons;
