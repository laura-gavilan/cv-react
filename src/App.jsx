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


  const personalInfo = {
    fullNme: "Laura Gavilán Sabiote",
    position: "Fronted Developer con experiencia en React, HTML, CSS y JavaScript",
    location: "Madrid",
    email: "Lauragavilansabiote@hotmail.com",
    phone: 649846617,
  };

  const sections = {
    experience: <Experience />,
    education: <Education/>,
    skills: <Skills/>,
    languages: <Languages/>
  };



  return (
    <>
      <div className='app-container'>
        <div className='header'>
          <Header
            fullNme={personalInfo.fullNme}
            position={personalInfo.position} />

          <ContactInfo
            location={personalInfo.location}
            email={personalInfo.email}
            phone={personalInfo.phone} />
        </div>

        <Navigation 
          onSection={(id) => setActiveSection(prev => prev === id ? null : id)}
          activeSection={activeSection} />

        {activeSection && sections[activeSection]}
      </div>
    </>
  );
};

