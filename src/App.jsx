import { useState } from 'react';
import './App.css'
import { ContactInfo } from './components/ContactInfo/ContactInfo'
import { Header } from './components/Header/Header'
import { Navigation } from './components/Navigation/Navigation';
import { Experience } from './components/Sections/Experience';
import { Education } from './components/Sections/Education';
import { Skills } from './components/Sections/Skills';
import { Languages } from './components/Sections/Languages';


export const App = () => {
  const [activeSection, setActiveSection] = useState("experience");
  const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode) setDarkMode(JSON.parse(savedMode));
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(prev => {
            localStorage.setItem("darkMode", JSON.stringify(!prev));
            return !prev;
        });
    }


  const personalInfo = {
    fullNme: "Laura Gavilán Sabiote",
    position: "Fronted Developer",
    location: "Localización: Madrid",
    email: "Lauragavilansabiote@hotmail.com",
    phone: 649846617,
    summary: "Fronted Developer con experiencia en React"
  };


  const sections = {
    experience: <Experience />,
    education: (
      <Education
        degree="Máster en programación + Inteligencia Artificial"
        modality="Modalidad Online"
        period="Junio 2024 - Actualidad"
        details={[
          "Lenguajes y frameworks: Javascript",
          "Desarrollo de aplicaciones web con HTML, CSS, Javascript, React",
          "proyecto de web personal"
        ]}
      />
    ),
    skills: <Skills />,
    languages: (
      <Languages
        languages={[
          {
            name: "Español",
            level: "Nativo"
          },

          {
            name: "Inglés",
            level: "B1",
            institution: "Trinity College"
          }
        ]} />)
  };


  return (
    <>
      <div className={'app-container ${darkMode ? `☀️` : "🌙"'}>
        <div className='header'>
          <Header
            fullNme={personalInfo.fullNme}
            position={personalInfo.position}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode} />

          <ContactInfo
            location={personalInfo.location}
            email={personalInfo.email}
            phone={personalInfo.phone}
            summary={personalInfo.summary} />
        </div>

        <Navigation
          onSection={(id) => setActiveSection(id)}
          activeSection={activeSection} />

        {sections[activeSection]}

        {/* <Experience />

        <Education
          degree={Education.degree}
          modality={Education.modality}
          period={Education.period}
          details={Education.details}
        />

        <Skills />

        <Languages /> */}


      </div>
    </>
  );
};

