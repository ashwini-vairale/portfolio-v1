import React from 'react';
import './Experience.css';
import { worktimeline } from '../../content_option';

function Experience() {
    return (
        <section id="experience" className="experience main-section ">
            <div className="row">

                <div className="col">

                    <header className="title playfair-display">
                        <h2>EDUCATION</h2>
                    </header>

                    <div className="contents">

                        {worktimeline.education.map((item, index) => (
                            <div key={index} className="box">
                                <h4>{item.date}</h4>
                                <h3>{item.institute}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}

                    </div>
                </div>
                <>
                    {worktimeline.experience && worktimeline.experience.length > 0 && (
                        <div className="col">
                            <header className="title playfair-display">
                                <h2>EXPERIENCE</h2>
                            </header>

                            <div className="contents">
                                {worktimeline.experience.map((item, index) => (
                                    <div key={index} className="box">
                                        <h4>{item.date}</h4>
                                        <h3>{item.position}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            </div>
        </section>)
}

export default Experience;
