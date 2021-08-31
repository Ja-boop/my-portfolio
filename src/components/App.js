import AboutMe from './pages/AboutMe/AboutMe';
import MyWork from './pages/MyWork/MyWork';
import Footer from './pages/Footer/Footer';
import './App.css'
import './css/mediaQueries.css'

const frontEnd = ['JavaScript', 'HTML', 'CSS', 'React', 'Bulma', 'Bootstrap', 'Nunjucks', 'Handlebars'];
const backEnd = ['NodeJs (ES6 Modules)', 'SQlite', 'Express', 'Sequelize'];
const testing = ['Jest (Pruebas unitarias)', 'Cypress (Pruebas de integracion)']

function App() {
    return (
        <div className="container">
            <AboutMe titulo={'Hola, soy Viktor!'} frontSkill={frontEnd} backSkills={backEnd} testSkills={testing} />
            <MyWork />
            <Footer />
        </div>
    )
}

export default App;
