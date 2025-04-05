import { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const sections = [
    { id: 'home', ref: homeRef, component: Home },
    { id: 'about', ref: aboutRef, component: About },
    { id: 'projects', ref: projectsRef, component: Projects },
    { id: 'skills', ref: skillsRef, component: Skills },
    { id: 'resume', ref: resumeRef, component: Resume },
    { id: 'contact', ref: contactRef, component: Contact },
  ];

  return (
    <div className="bg-black min-h-screen relative">
      <Navbar sections={sections} />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {sections.map(({ id, ref, component: Component }) => (
          <div key={id} ref={ref} className="snap-start min-h-screen">
            <Component />
          </div>
        ))}
        <Footer />
      </div>
    </div>
  )
}

export default App
