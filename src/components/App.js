import AboutMe from './pages/AboutMe/AboutMe';
import MyWork from './pages/MyWork/MyWork';
import Footer from './pages/Footer/Footer';
import './App.css'
import './css/mediaQueries.css'



function App() {
    return (
        <div className="container">
            <AboutMe />
            <MyWork />
            <Footer />
        </div>
    )
}

export default App;
