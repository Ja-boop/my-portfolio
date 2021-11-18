import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="header-container" >
            <div className="header-div-text" >
                <p className="header-contact-text">Contáctame</p>
            </div>
            <div className="header-div-links" >
                <a href="https://www.linkedin.com/in/viktor-agust%C3%ADn-luzny-41529617a/" target="_blank" rel="noreferrer" >
                    <FontAwesomeIcon icon={faLinkedin} color="white" size="3x"/>
                </a>
                <a href="https://github.com/Ja-boop" target="_blank" rel="noreferrer"  >
                <FontAwesomeIcon icon={faGithub} color="white" size="3x"/>
                </a>
                <a href="mailto:viktor.luzny@gmail.com" target="_blank" rel="noreferrer"  >
                <FontAwesomeIcon icon={faEnvelopeSquare} color="white" size="3x"/>
                </a>
            </div>
        </div>
    );
};

export default Header;
