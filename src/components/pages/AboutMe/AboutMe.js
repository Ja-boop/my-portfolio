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
                <div className="skill-box">
                    <div className="item-1">
                        <h2 className="cyberpunk glitched textcybrborder" title="Front End">Front End</h2>
                        <div>
                            <ul className="skill-ul">
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React</li>
                                <li>Bulma</li>
                                <li>Bootstrap</li>
                                <li>Nunjucks</li>
                                <li>Handlebars</li>
                            </ul>
                        </div>
                    </div>
                    <div className="item-1">
                        <h2 className="cyberpunk glitched textcybrborder" title="Back End">Back End</h2>
                        <div>
                            <ul className="skill-ul">
                                <li>NodeJs (ES6 Modules)</li>
                                <li>SQlite</li>
                                <li>Express</li>
                                <li>Sequelize</li>
                            </ul>
                        </div>
                    </div>
                    <div className="item-1">
                        <h2 className="cyberpunk glitched textcybrborder" title="Testing">Testing</h2>
                        <div>
                            <ul className="skill-ul">
                                <li>Jest (Pruebas unitarias)</li>
                                <li>Cypress (Pruebas de integracion)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
