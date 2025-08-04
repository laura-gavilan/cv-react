import { useState } from 'react';
import './App.css'
import { ContactInfo } from './components/ContactInfo/ContactInfo'
import { Header } from './components/Header/Header'
import { Navigation } from './components/Navigation/Navigation';
import { ExperienceSection } from './components/ExperienceSection/ExperienceSection';
import { EducationSection } from './components/EducationSection/EducationSection';
import { SkillsSection } from './components/SkillsSection/SkillsSection';
import { LanguagesSection } from './components/LanguagesSection/LanguagesSection';
import { ViewAll } from './components/ViewAll/ViewAll';


export const App = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // useEffect(() => {
  //     const savedMode = localStorage.getItem("darkMode");
  //     if (savedMode) setDarkMode(JSON.parse(savedMode));
  // }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      localStorage.setItem("darkMode", JSON.stringify(!prev));
      return !prev;
    });
  };

  const toggleShowAll = () => {
    setShowAll(prev => !prev);
    setActiveSection(null);
  }

  // Cuando seleccionas una sección individual, oculta la vista "todo"
  const onSelectSection = (id) => {
    // Si haces click en la misma sección que ya está activa, la ocultamos
    if (activeSection === id) {
      setActiveSection(null);
    } else {
      setActiveSection(id);
    }
    setShowAll(false);
  };


  const personalInfo = {
    fullNme: "Laura Gavilán Sabiote",
    position: "Desarrolladora Frontend",
    location: "Localización: Madrid",
    email: "Lauragavilansabiote@hotmail.com",
    phone: 649846617,
    summary: "Desarrolladora Frontend en formación con experiencia práctica en React, JavaScript, HTML y CSS. Tras años de trabajo en entornos multidisciplinares como Terapeuta Ocupacional, aporto una visión centrada en el usuario, habilidades de comunicación efectiva y enfoque en la accesibilidad web. Comprometida con la calidad del código y el aprendizaje continuo."
  };


  const experienceData = [
    {
      title: "Terapeuta Ocupacional",
      period: "2024 - Actualmente",
      company: "Centro de Rehabilitación Laboral",
      organization: "Intress",
      responsabilities: [
        "Evaluación integral con la persona y su entorno",
        "Planifaicación de intervenciones ocupacionales personalizadas",
        "Diseño y ejecución de itinerarios formativos y laborales",
        "Colaboración activa en qeuipos multidisciplinares",
        "Coordinación efectiva con empresas externas apra faciliar la reinserción laboral"
      ]
    },

    {
      title: "Terapeuta Ocupacional",
      period: "2015 - 2024",
      company: "Recursos sociosanitarios (salud metnal y mayores)",
      organization: "Fundación Pilares, Grupo 5, Cruz Roja, Adespro, Stima, Fundación Sageco",
      responsabilities: [
        "Liderazgo y coordinación de equipos multidisciplinares",
        "Desarrollo de planes de intervención personalizados mediante el modelo de Atención integral y Centrada en la Persona (AICP)",
        "Promoción de la autonomía, participación y calidad de vida de las personas y su entorno",
        "Gestión de comunicación entre profesionales, usuarios y familiares "
      ]
    }
  ];


  const educationData = {
    degree: "Máster en programación + Inteligencia Artificial",
    modality: "Modalidad Aula Virtual",
    period: "Junio 2024 - Actualidad",
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
    experience: <ExperienceSection experiences={experienceData} />,
    education: <EducationSection {...educationData} />,
    skills: <SkillsSection />,
    languages: <LanguagesSection languages={languagesData} />

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
        onSection={onSelectSection}
        activeSection={activeSection}
      />

        <div className="viewall-button-container">
          <button onClick={toggleShowAll} className="view-all-btn">
            {showAll ? "Ocultar todo" : "Ver toda la información"}
          </button>
        </div>

        {/* Si showAll está activo, muestra todas las secciones */}
        {showAll ? (
          <ViewAll
            experience={experienceData}
            education={educationData}
            languages={languagesData}
          />
        ) : (
          // Si no, muestra la sección activa, o nada si no hay
          activeSection && sections[activeSection]
        )}
      </div>
    </>
  );
};

