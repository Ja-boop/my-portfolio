import Header from './pages/Header/Header';
import AboutMe from './pages/AboutMe/AboutMe';
import MyWork from './pages/MyWork/MyWork';
import Footer from './pages/Footer/Footer';
import './App.css'
import './css/mediaQueries.css'

const titulo = '¡Hola, soy Víktor!';
const introduccion = "Estudio desarrollo web, y me encanta la idea de crear aplicaciones y aprender tecnologías nuevas.";

function App() {
    return (
        <div className="container">
            <Header />
            <AboutMe titulo={titulo} introduccion={introduccion} />
            <MyWork />
            <Footer />
        </div>
    )
}

export default App;
