import React from "react";
import "../styles/playerStats.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const PlayerStats = () => {
    return (
        <div id="playerStats">
            <h1>Katleho Tsotetsi</h1>
            <div id="playerStats__lines">
                <span id="playerStats__lines__thick"></span>
                <span id="playerStats__lines__thin"></span>
            </div>
            <h2>Aspiring Software and Robotic Process Automation Developer</h2>
            <h3 className="playerStats__icons">
                <a href="https://github.com/yo-cater" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/yo-cater" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="mailto:katlehoedson28@example.com" aria-label="Email">
                    <FaEnvelope />
                </a>
            </h3>
        </div>
    );
};

export default PlayerStats;
