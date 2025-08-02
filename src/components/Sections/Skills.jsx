import "./Sections.css"
import html5 from "../../media/images/html5.png"
import css3 from "../../media/images/css3.png"
import js from "../../media/images/js.png"
import react from "../../media/images/react.png"
import vscode from "../../media/images/vscode.png"
import github from "../../media/images/github.png"

export const Skills = () => {
    return (
        <>
            <section className="skills-container">

                <div className="programming-languages">
                    <h2>Lenguajes de programación</h2>
                    <div>
                        <img src={html5} alt="icono de HTML5" />
                        <p>HTML5</p>
                    </div>

                    <div>
                        <img src={css3} alt="icono de CSS" />
                        <p>CSS</p>
                    </div>

                    <div>
                        <img src={js} alt="icono de JS" />
                        <p>JAVASCRIPT</p>
                    </div>
                </div>

                <div className="frameworks">
                    <h2>Frameworks-librerías</h2>
                    <div>
                        <img src={react} alt="icono de React" />
                        <p>REACT</p>
                    </div>
                </div>


                <div className="tools">
                    <h2>Herramientas</h2>
                    <div>
                        <img src={vscode} alt="icono de Visual Studio Code" />
                        <p>VSCode</p>
                    </div>

                    <div>
                        <img src={github} alt="icono de GitHub" />
                        <p>GITHUB</p>
                    </div>
                </div>
            </section>

            <section className="softs-skills">
                <h2>SOFT SKILLS</h2>

                <ul>
                    <li>Trabajo en equipo</li>
                    <li>Comunicación efectiva</li>
                    <li>Resolución de problemas</li>
                </ul>
            </section>
        </>
    );
};