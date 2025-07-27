import { useState } from 'react';
import './App.css'
import { ContactInfo } from './components/ContactInfo/ContactInfo'
import { Header } from './components/Header/Header'
import { Navigation } from './components/Navigation/Navigation';

export const App = () => {
  const [activeSection, setActiveSection] = useState("experiencie");


  const personalInfo = {
    fullNme: "Laura Gavilán Sabiote",
    position: "Fronted Developer",
    summary: "Fronted Developer con experiencia en React, HTML, CSS y JavaScript",
    location: "Madrid",
    email: "Lauragavilansabiote@hotmail.com",
    phone: 649846617,
  };



  return (
    <>
      <div className='app-container'>
        <Header
          fullNme={personalInfo.fullNme}
          position={personalInfo.position} />

        <ContactInfo
          summary={personalInfo.summary}
          location={personalInfo.location}
          email={personalInfo.email}
          phone={personalInfo.phone} />

          <Navigation onSection={setActiveSection} />
      </div>
    </>
  );
};

