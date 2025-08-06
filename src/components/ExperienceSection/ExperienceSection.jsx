import "./ExperienceSection.css"

export const ExperienceSection = ({ experiences = [] }) => {
    return (
        <section className="experience-section">
            <h2>EXPERIENCIA LABORAL</h2>
            {experiences.map((job, index) => (
                <div key={index} className="job">
                    <h3>{job.title}</h3>
                    <p>{job.period}</p>
                    <p><strong>Empresa:</strong> {job.company}</p>
                    <p><strong>Organización:</strong> {job.organization}</p>
                    <ul>
                        {job.responsabilities.map((task, i) => (
                            <li key={i}>{task}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};



