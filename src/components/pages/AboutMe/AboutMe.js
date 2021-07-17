import React from 'react';
import './AboutMe.css'
import '../../css/cybrTheme.css'

const AboutMe = () => {
    return (
        <div>
            <div className="container-1">
                <h1>Hola, soy Viktor!</h1>
                <h2 className="title-is-h2">Estudio desarrollo web, y me encanta la idea de crear aplicaciones y aprender tecnologias nuevas.</h2>
            </div>
            <div className="container-2">
                <div className="box item-1">
                    <h2 className="cyberpunk glitched" title="Front End">Front End</h2>
                    <div>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bulma</li>
                            <li>Bootstrap</li>
                            <li>Nunjucks</li>
                            <li>Handlebars</li>
                            <li>GitHub</li>
                        </ul>
                    </div>
                </div>
                <div className="box item-1">
                    <h2 className="cyberpunk glitched" title="Back End">Back End</h2>
                    <div>
                        <ul>
                            <li>NodeJs (ES6 Modules)</li>
                            <li>SQlite</li>
                        </ul>
                    </div>
                </div>
                <div className="box">
                    <h2 className="cyberpunk glitched" title="API y Testing">API y Testing</h2>
                    <div>
                        <ul>
                            <li><p>Conocimiento de RESTFul
                                APIs y conceptos de
                                metodologías Ágiles.</p>
                            </li>
                            <li>Jest (Pruebas unitarias)</li>
                            <li>Cypress (Pruebas de integracion)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
