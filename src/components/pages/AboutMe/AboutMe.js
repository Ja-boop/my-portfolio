import React from 'react';
import './AboutMe.css';
import '../../css/cybrTheme.css';

const frontEnd = ['JavaScript', 'HTML', 'CSS', 'React', 'Bulma', 'Bootstrap', 'Nunjucks', 'Handlebars'];
const backEnd = ['NodeJs (ES6 Modules)', 'SQlite', 'Express', 'Sequelize'];
const testing = ['Jest (Pruebas unitarias)', 'Cypress (Pruebas de integración)']

const SkillContainer = (props) => {
    return (
        <div className="item-1">
            <h2 className="cyberpunk glitched textcybrborder" title={props.skillTitle}>{props.skillTitle}</h2>
            <div>
                <ul className="skill-ul">
                    {props.skill.map(skill => (
                        <li key={skill}>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const AboutMe = (props) => {
    return (
        <div>
            <div className="container-1">
                <h1 className="cyberpunk">{props.titulo}</h1>
                <h2 className="title-is-h2">{props.introduccion}</h2>
            </div>
            <div className="container-2">
                <div className="skill-box">
                    <SkillContainer skillTitle={'Front End'} skill={frontEnd} />
                    <SkillContainer skillTitle={'Back End'} skill={backEnd} />
                    <SkillContainer skillTitle={'Testing'} skill={testing} />
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
