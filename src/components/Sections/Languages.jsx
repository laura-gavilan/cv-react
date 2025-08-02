export const Languages = ({ languages  = [] }) => {
    return (
        <section className="languages">
            <h2>IDIOMAS</h2>
            <ul>
                {languages.map((lang, index) => (
                    <li key={index}>
                        {lang.name} - {lang.level}
                        {lang.institution && (
                            <div>{lang.institution}</div>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};