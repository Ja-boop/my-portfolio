import React from 'react';
import './SideBar.css';
import '../css/icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SideBar = () => {
    return (
        <div className="sidebar">
            <ul className="cybr-ul">
                <li className="first-li"><button title="ABOUT ME">ABOUT ME</button></li>
                <hr />
                <li><button title="MY WORK">MY WORK</button></li>
                <hr />
                <li><button title="CV">CV</button></li>
                <hr />
                <li><button title="CONTACT ME">CONTACT ME</button></li>
                <hr />
                <div className="icons">
                    <FontAwesomeIcon icon={faLinkedin} className="fa-3x space-icons" />
                    <FontAwesomeIcon icon={faGithub} className="fa-3x" />
                </div>
            </ul>
        </div>
    )
}

export default SideBar;
