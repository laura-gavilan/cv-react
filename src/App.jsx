import { useState } from 'react';
import './App.css'
import { ContactInfo } from './components/ContactInfo/ContactInfo'
import { Header } from './components/Header/Header'
import { Navigation } from './components/Navigation/Navigation';
import { Experience } from './components/Sections/Experience';

export const App = () => {
  const [activeSection, setActiveSection] = useState(null);


  const personalInfo = {
    fullNme: "Laura Gavilán Sabiote",
    position: "Fronted Developer con experiencia en React, HTML, CSS y JavaScript",
    location: "Madrid",
    email: "Lauragavilansabiote@hotmail.com",
    phone: 649846617,
  };

  const sections = {
    experience: <Experience />
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

