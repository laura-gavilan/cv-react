import { useState } from 'react';
import './App.css'
import { ContactInfo } from './components/ContactInfo/ContactInfo'
import { Header } from './components/Header/Header'
import { Navigation } from './components/Navigation/Navigation';
import { Experience } from './components/Sections/Experience';
import { Education } from './components/Sections/Education';
import { Skills } from './components/Sections/Skills';
import { Languages } from './components/Sections/Languages';
import { ViewAll } from './components/ViewAll/ViewAll';


export const App = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //     const savedMode = localStorage.getItem("darkMode");
  //     if (savedMode) setDarkMode(JSON.parse(savedMode));
  // }, []);

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


  const educationData = {
    degree:"Máster en programación + Inteligencia Artificial",
    modality:"Modalidad Aula Virtual",
    period:"Junio 2024 - Actualidad",
    details: [
      "Tecnologías aprendidas: React, JavaScript, HTML, CSS, GitHub",
      "Desarrollo de proyectos individuales y grupales",
      "Enfoque en buenas prácticas de código, responsive design y accesibilidad"
    ]
  };

  const languagesData = [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "B1", institution: "Trinity College" }
  ];


  const sections = {
    experience: <Experience />,
    education: <Education {...educationData} />,
    skills: <Skills />,
    languages: <Languages languages={languagesData} />
  
  };


  return (
    <>
      <div className={`app-container ${darkMode ? "dark" : "light"}`}>
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

        <ViewAll education={educationData} languages={languagesData} />
      </div>
    </>
  );
};

