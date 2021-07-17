import React from 'react';
import SideBar from './SideBar/SideBar';
import AboutMe from './pages/AboutMe/AboutMe';
import MyWork from './pages/MyWork/MyWork';
import './App.css'

function App() {
    return (
        <div className="container">
            <SideBar></SideBar>
            {/* <AboutMe></AboutMe> */}
            <MyWork></MyWork>
        </div>
    )
}

export default App;
