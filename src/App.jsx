import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./components/Banner";
import NavbarComponent from "./components/NavbarComponent";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";



function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
