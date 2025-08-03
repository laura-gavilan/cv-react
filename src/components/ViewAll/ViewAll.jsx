import { useState } from "react"
import { Experience } from "../Sections/Experience";
import { Education } from "../Sections/Education";
import { Skills } from "../Sections/Skills";
import { Languages } from "../Sections/Languages";


export const ViewAll = ({ education, languages }) => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(prev => !prev);
    };

    return (
        <>
            <div className="view-all">
                <button onClick={toggleShowAll} className="view-all-btn">
                    {showAll ? "Ocultar todo" : "Ver toda la información"}
                </button>

                {showAll && (
                    <div className="all-sections">
                        <Experience />

                        <Education
                            degree={education.degree}
                            modality={education.modality}
                            period={education.period}
                            details={education.details}
                        />

                        <Skills />

                        <Languages languages={languages} />
                    </div>
                )}
            </div>
        </>
    );
};