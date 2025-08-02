export const Education = ({degree, modality, period, details = [] }) => {
    return (
        <section className="education">
            <div className="education-container">
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