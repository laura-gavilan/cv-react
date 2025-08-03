import "./Sections.css"

export const Experience = () => {
    const ExperienceData = [
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
            period: "2015 - 2025",
            company: "Diferentes Recursos de salud mental y personas mayores",
            organization: "Fundación Pilares, Grupo 5, Cruz Roja, Adespro, Stima, Fundación Sageco",
            responsabilities: [
                "Liderazgo y coordinación de qeuipos ultidisciplinares",
                "Desarrollo de planes de intervención personalizados mediante el modelo AICP",
                "Promoción de la autonomía y calidad de vida de las personas y su entorno",
                "Gestión de comunicación entre profesionales, usuarios y familiares "
            ]
        }
    ];

    return (
        <section className="experience-section">
            <h2>EXPERIENCIA LABORAL</h2>
            <ul>{ExperienceData.map((job, index) => (
                <li key={index}>
                    <h3>{job.title}</h3>
                    <p>{job.period}</p>
                    <p>{job.company}</p>
                    <p>{job.organization}</p>
                    <ul>
                        {job.responsabilities.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </li>
            ))}</ul>
        </section>
    );
};


