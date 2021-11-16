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
                <h2 className="cyberpunk">Linkedin</h2>
                <h2 className="cyberpunk">Github</h2>
                <h2 className="cyberpunk">Email</h2>
            </div>
            <div className="footer-icons">  
                <FontAwesomeIcon icon={faLinkedin} color="white" size="5x" />
                <FontAwesomeIcon icon={faGithub} color="white" size="5x" />
                <FontAwesomeIcon icon={faEnvelopeSquare} color="white" size="5x" />
            </div>
        </footer>
    )
}

export default Footer;
