import React from 'react';
import './Footer.css'
import '../../css/cybrTheme.css'
import '../../css/mediaQueriesFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-thanks">
                <p>A Fabricio y a toda la comunidad de r/argentina-programa</p>
                <p>¡Muchas gracias!</p>
            </div>
            <div className="footer-links">
                <h2 className="cyberpunk"><a href="https://www.linkedin.com/in/viktor-agust%C3%ADn-luzny-41529617a/" target="_blank" rel="noreferrer" >Linkedin</a></h2>
                <h2 className="cyberpunk"><a href="https://github.com/Ja-boop" target="_blank" rel="noreferrer" >GitHub</a></h2>
                <h2 className="cyberpunk"><a href="mailto:viktor.luzny@gmail.com" target="_blank" rel="noreferrer" >Email</a></h2>
            </div>
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/viktor-agust%C3%ADn-luzny-41529617a/" target="_blank" rel="noreferrer" >
                    <FontAwesomeIcon icon={faLinkedin} color="white" size="3x" />
                </a>
                <a href="https://github.com/Ja-boop" target="_blank" rel="noreferrer"  >
                    <FontAwesomeIcon icon={faGithub} color="white" size="3x" />
                </a>
                <a href="mailto:viktor.luzny@gmail.com" target="_blank" rel="noreferrer"  >
                    <FontAwesomeIcon icon={faEnvelopeSquare} color="white" size="3x" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;
