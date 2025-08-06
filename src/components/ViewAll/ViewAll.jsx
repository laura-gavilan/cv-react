import { ExperienceSection } from '../ExperienceSection/ExperienceSection';
import { EducationSection } from "../EducationSection/EducationSection";
import { SkillsSection } from "../SkillsSection/SkillsSection";
import { LanguagesSection } from "../LanguagesSection/LanguagesSection";



export const ViewAll = ({ experience, education, languages }) => {
    return (
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

    );
};