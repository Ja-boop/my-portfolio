import React, { useState } from 'react';
import AboutMe from './pages/AboutMe/AboutMe';
import MyWork from './pages/MyWork/MyWork';
import UlButtons from './small/UlButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './App.css'
import './css/SideBar.css';
import './css/icons.css';

const pages = {
    aboutMe: {
        name: 'About Me',
        component: AboutMe,
    },
    myWork: {
        name: 'My Work',
        component: MyWork,
    },
};

function App() {
    const [currentPage, setCurrentPage] = useState('aboutMe')
    const CurrentComponent = pages[currentPage].component;
    return (
        <div className="container">
            <div className="sidebar">
                <ul className="cybr-ul">
                    <UlButtons>
                    handlerFunction={(event) => {setCurrentPage(event.target.getAttribute('name'))}} 
                    </UlButtons> 
                    <div className="icons">
                        <FontAwesomeIcon icon={faLinkedin} className="fa-3x space-icons" />
                        <FontAwesomeIcon icon={faGithub} className="fa-3x" />
                    </div>
                </ul>
            </div>
            <CurrentComponent />
        </div>
    )
}

export default App;
