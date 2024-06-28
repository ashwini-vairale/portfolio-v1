import React, { useState } from 'react';
import './Accomplishment.css';
import Portfolio from '../Portfolio/Portfolio';
import { dataportfolio } from '../../content_option';
import Papers from '../Papers/Paper';


function Accomplishment() {
    const [activeTab, setActiveTab] = useState('projects');

    const handleTabClick = (tabId, event) => {
        event.preventDefault();
        setActiveTab(tabId);
    };

    return (
        <section id="accomplishments" className=" main-section">
            <h1 className='playfair-display center bold_700'>Here Are My Accomplishments</h1>
            <nav className="navbar navbar-expand justify-content-center navbar-light bg-light accomplishments-nav">
                <ul className="navbar-nav">
                    <li className={`nav-item ${activeTab === 'projects' ? 'active' : ''}`}>
                        <a className="nav-link accomplishments-link" href="#projects" onClick={(e) => handleTabClick('projects', e)}>Projects</a>
                    </li>
                    <li className={`nav-item ${activeTab === 'achievements' ? 'active' : ''}`}>
                        <a className="nav-link accomplishments-link" href="#achievements" onClick={(e) => handleTabClick('achievements', e)}>Achievements</a>
                    </li>
                    <li className={`nav-item ${activeTab === 'certifications' ? 'active' : ''}`}>
                        <a className="nav-link accomplishments-link" href="#certifications" onClick={(e) => handleTabClick('certifications', e)}>Presentations</a>
                    </li>
                    <li className={`nav-item ${activeTab === 'papers' ? 'active' : ''}`}>
                        <a className="nav-link accomplishments-link" href="#papers" onClick={(e) => handleTabClick('papers', e)}>Papers</a>
                    </li>
                </ul>

            </nav>
            <div className="tab-content">
                <div className={`tab-pane ${activeTab === 'projects' ? 'active' : ''}`} id="projects">
                    <Portfolio heading={{ id: 'projects', head: 'Projects' }} portfoliodata={dataportfolio.projects} />
                </div>
                <div className={`tab-pane ${activeTab === 'achievements' ? 'active' : ''}`} id="achievements">
                    <Portfolio heading={{ id: 'achievements', head: 'Achievements' }} portfoliodata={dataportfolio.achievements} />
                </div>
                <div className={`tab-pane ${activeTab === 'certifications' ? 'active' : ''}`} id="certifications">
                    <Portfolio heading={{ id: 'certifications', head: 'Presentations & Certifications' }} portfoliodata={dataportfolio.certification} />
                </div>
                <div className={`tab-pane ${activeTab === 'papers' ? 'active' : ''}`} id="papers">
                    <Papers portfoliodata={dataportfolio.papers} />
                </div>
            </div>
        </section>
    );
}

export default Accomplishment;
