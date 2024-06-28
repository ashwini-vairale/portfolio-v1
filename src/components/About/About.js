import React from 'react';
import './About.css';
import { dataabout, meta } from '../../content_option';
import { Helmet } from 'react-helmet-async';

function About() {
    return (
        <section id="about" className="about main-section">
            <div className="main-container">
                <h2 className="heading-secondary projects__heading-secondary">
                    <span className="heading-secondary__sm comfortaa playfair-display bold_700">About </span>
                    <span className="heading-secondary__main playfair-display">
                        Here you will find more information about me, what I do, and list of my current skills
                    </span>
                </h2>
                <div className="main-section__content">
                    <div className="about_section">
                        {dataabout.map(card => (
                            <div
                                className="cards"
                                id={card.id}
                                key={card.id}
                                style={{ backgroundImage: `url(${card.imageUrl})` }}
                            >
                                <h2 className="about-heading">{card.heading}</h2>
                                <div className="about_content playfair-display">{card.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
