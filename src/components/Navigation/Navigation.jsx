const sections = [
    { id: "experience", label: "Experiencia" },
    { id: "education", label: "Formación"},
    { id: "skills", label: "Habilidades" },
    { id: "languages", label: "Idiomas"},
];

export const Navigation = ({ onSection, activeSection }) => {
    return (
        <nav className="nav">
            <ul>
                {sections.map((section) => {
                    return <li key={section.id}>
                        <button onClick={() => onSection(section.id)}>
                            {section.label}
                        </button>
                    </li>
                })}
            </ul>
        </nav>
    );
};