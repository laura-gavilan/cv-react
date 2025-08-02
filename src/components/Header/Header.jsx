import { useEffect, useState } from "react";
import "./Header.css"

export const Header = ({ fullNme, position}) => {
    const [darkMode, setDarkMode] = useState(false);
    
    // useEffect(() => {
    //     const savedMode = localStorage.getItem("darkMode");
    //     if (savedMode) setDarkMode(JSON.parse(savedMode));
    // }, []);

    const toggleDarkMode = () => {
        setDarkMode(prev => {
            localStorage.setItem("darkMode", JSON.stringify(!prev));
            return !preview;
        });
    }

    return (
            <div className={`header ${darkMode ? "dark" : "light"}`}>                
                <h1 className='full-name'>{fullNme}</h1>

                <h2 className='position'>{position}</h2>

                <button onClick={toggleDarkMode} className="mode-toggle-btn">
                    {darkMode ? "☀️" : "🌙"}
                </button>
            </div>
    );
};