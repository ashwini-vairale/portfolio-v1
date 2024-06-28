import React from 'react';
import './SkillShowcase.css';
import { icons } from '../../content_option';


function SkillShowcase() {
    return (
        <section className="skills-showcase">
            <ul className="skills-showcase__list">
                {Object.values(icons).slice(0, 9).map((logo, index) => (
                    <li key={index} className="skills-showcase__list-item">
                        <img src={logo} alt={`Logo ${index + 1}`} />
                    </li>
                ))}
            </ul>

        </section>
    );
}

export default SkillShowcase;
