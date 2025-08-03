import "./Sections.css"
import html5 from "../../media/images/html5.png"
import css3 from "../../media/images/css3.png"
import js from "../../media/images/js.png"
import react from "../../media/images/react.png"
import vscode from "../../media/images/vscode.png"
import github from "../../media/images/github.png"

export const Skills = () => {
    return (
        <section className="skills-container">
            <h2 className="skills-title">Hard & Soft Skills</h2>

            <div className="skills-category">
                <h3>Lenguajes de programación</h3>
                <div className="skills-row">
                    <div className="skill-card">
                        <img src={html5} alt="HTML5" />
                        <p>HTML5</p>
                    </div>
                    <div className="skill-card">
                        <img src={css3} alt="CSS3" />
                        <p>CSS3</p>
                    </div>
                    <div className="skill-card">
                        <img src={js} alt="JavaScript" />
                        <p>JavaScript</p>
                    </div>
                </div>
            </div>

            <div className="skills-category">
                <h3>Frameworks / Librerías</h3>
                <div className="skills-row">
                    <div className="skill-card">
                        <img src={react} alt="React" />
                        <p>React</p>
                    </div>
                </div>
            </div>

            <div className="skills-category">
                <h3>Herramientas</h3>
                <div className="skills-row">
                    <div className="skill-card">
                        <img src={vscode} alt="VSCode" />
                        <p>VSCode</p>
                    </div>
                    <div className="skill-card">
                        <img src={github} alt="GitHub" />
                        <p>GitHub</p>
                    </div>
                </div>
            </div>

            <div className="skills-category soft-skills">
                <h3>Soft Skills</h3>
                <ul className="soft-skills-list">
                    <li>Trabajo en equipo</li>
                    <li>Comunicación efectiva</li>
                    <li>Resolución de problemas</li>
                    <li>Adaptabilidad</li>
                    <li>Pensamiento crítico</li>
                </ul>
            </div>
        </section>
    );
}