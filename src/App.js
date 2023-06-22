import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { VeilleJ } from "./components/VeilleJ";
import { VeilleT } from "./components/VeilleT";
import { Contact } from "./components/Contact";
import { Profil } from "./components/Profil";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Profil />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;