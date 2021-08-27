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
                <p>A Fabricio por haber creado este gran curso, sacrificando mucho de su tiempo</p>
                <p>Por crear una comunidad donde nos ayudamos entre nosotros y también a las nuevas personas que entran</p>
                <p>Y como él y mucha gente en Internet que comparte sus conocimientos sin pedir nada a cambio</p>
                <p>Muchas gracias</p>
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
