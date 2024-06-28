import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { introdata } from '../../content_option';
import { Helmet } from 'react-helmet-async';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrolled(scrollPosition >= 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const location = useLocation();

    useEffect(() => {
        const sectionId = location.pathname.substring(1);
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <section id="home" className="header-main">
            <nav className={`navbar navbar-expand-lg main-header__navigation main-header ${scrolled ? 'nav-scroll' : ''}`}>
                <div className="main-header__logo-container">
                    <h4 className="main-header__logo-text comfortaa">{introdata.title}</h4>
                </div>
                <button onClick={toggleNavbar} className="navbar-toggler" type="button" aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation">
                    <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </button>
                <div className={`collapse navbar-collapse comfortaa ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ml-auto main-header__navigation-links">
                        <li className="nav-item main-header__navigation-link">
                            <Link className="nav-link header-links" to="/home-hero" onClick={closeNavbar}>Home</Link>
                        </li>
                        <li className="nav-item main-header__navigation-link">
                            <Link className="nav-link header-links" to="/about" onClick={closeNavbar}>About</Link>
                        </li>
                        <li className="nav-item main-header__navigation-link">
                            <Link className="nav-link header-links" to="/accomplishments" onClick={closeNavbar}>Accomplishments</Link>
                        </li>
                        <li className="nav-item main-header__navigation-link">
                            <Link className="nav-link header-links" to="/contact" onClick={closeNavbar}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="home-hero" className="home-hero">
                <div className="home-hero__content">
                    <div className="home-hero__info">
                        <h1 className="heading-primary home-hero__heading-primary">
                            <span className="heading-primary__sm playfair-display">Hello!</span>
                            <span className="heading-primary__main">
                                {introdata.description}
                            </span>
                        </h1>
                        <a href={introdata.resume} className="btn btn-theme home-hero__btn-theme comfortaa" download target='_blank'>Resume</a>
                        <Link to="/contact" className="btn btn-inv home-hero__btn-theme comfortaa" onClick={closeNavbar}>Contact</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
