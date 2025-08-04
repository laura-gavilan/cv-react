import { useState } from "react"
import { ExperienceSection } from '../ExperienceSection/ExperienceSection';
import { EducationSection } from "../EducationSection/EducationSection";
import { SkillsSection } from "../SkillsSection/SkillsSection";
import { LanguagesSection } from "../LanguagesSection/LanguagesSection";



export const ViewAll = ({ experience, education, languages }) => {
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
                        <ExperienceSection experiences={experience} />

                        <EducationSection
                            degree={education.degree}
                            modality={education.modality}
                            period={education.period}
                            details={education.details}
                        />

                        <SkillsSection />

                        <LanguagesSection languages={languages} />
                    </div>
                )}
            </div>
        </>
    );
};