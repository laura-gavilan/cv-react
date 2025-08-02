import { useEffect, useState } from "react";
import "./Header.css"

export const Header = ({ fullNme, position, darkMode, toggleDarkMode}) => {
    return (
            <div className="header">                
                <h1 className='full-name'>{fullNme}</h1>

                <h2 className='position'>{position}</h2>

                <button onClick={toggleDarkMode} className="mode-toggle-btn">
                    {darkMode ? "☀️" : "🌙"}
                </button>
            </div>
    );
};