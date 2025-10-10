import './App.css';
import Navigation from './components/Navigation';
import HeroBanner from './components/HeroBanner';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience/indesx';
import Education from './components/Education';
import Projects from './components/Project';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <section id="home">
        <HeroBanner /> 
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;
