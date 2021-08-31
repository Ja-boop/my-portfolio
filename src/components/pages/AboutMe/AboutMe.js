import React from 'react';
import './AboutMe.css';
import '../../css/cybrTheme.css';

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
                <h2 className="title-is-h2">Estudio desarrollo web, y me encanta la idea de crear aplicaciones y aprender tecnologias nuevas.</h2>
            </div>
            <div className="container-2">
                <div className="skill-box">
                    <SkillContainer skillTitle={'Front End'} skill={props.frontSkill} />
                    <SkillContainer skillTitle={'Back End'} skill={props.backSkills} />
                    <SkillContainer skillTitle={'Testing'} skill={props.testSkills} />
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
