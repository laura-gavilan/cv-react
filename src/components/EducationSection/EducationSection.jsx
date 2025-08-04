import "./EducationSection.css"

export const EducationSection = ({degree, modality, period, details = [] }) => {
    return (
        <section className="education">
            <div className="education-container">
                <h1>FORMACIÓN</h1>
                <h3>{degree}</h3>
                <p>{modality}</p>
                <p>{period}</p>

                <ul>
                    {details.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        </section>
    );
};