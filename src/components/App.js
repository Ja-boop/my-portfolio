import AboutMe from './pages/AboutMe/AboutMe';
import MyWork from './pages/MyWork/MyWork';
import Footer from './pages/Footer/Footer';
import './App.css'
import './css/mediaQueries.css'

const titulo = 'Hola, soy Viktor!';
const introduccion = "Estudio desarrollo web, y me encanta la idea de crear aplicaciones y aprender tecnologias nuevas.";

function App() {
    return (
        <div className="container">
            <AboutMe titulo={titulo} introduccion={introduccion} />
            <MyWork />
            <Footer />
        </div>
    )
}

export default App;
