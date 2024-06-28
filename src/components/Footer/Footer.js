import React from 'react';
import './Footer.css';
import {
    FaGithub,
    FaTwitter,
    FaFacebookF,
    FaLinkedin,
    FaYoutube,
    FaTwitch,
    FaEnvelope,
    FaInstagram,
} from "react-icons/fa";
import { socialprofils, outrodata, meta } from '../../content_option';

function Footer() {

    const currentYear = new Date().getFullYear();

    return (<footer className="main-footer">
        <div className="main-footer__upper">
            <div className="main-container d-flex">
                <div className="main-footer__description ">
                    <h2 className='comfortaa'>{meta.title}</h2>
                    <br></br>
                    <p className='playfair-display'>{outrodata.description}</p>
                </div>

                <div className="main-footer__socials">
                    <ul>
                        {socialprofils.twitter && (
                            <li>
                                <a href={socialprofils.twitter} target='_blank'>
                                    <FaTwitter />
                                </a>
                            </li>
                        )}
                        {socialprofils.github && (
                            <li>
                                <a href={socialprofils.github} target='_blank'>
                                    <FaGithub />
                                </a>
                            </li>
                        )}
                        {socialprofils.facebook && (
                            <li>
                                <a href={socialprofils.facebook} target='_blank'>
                                    <FaFacebookF />
                                </a>
                            </li>
                        )}
                        {socialprofils.linkedin && (
                            <li>
                                <a href={socialprofils.linkedin} target='_blank'>
                                    <FaLinkedin />
                                </a>
                            </li>
                        )}
                        {socialprofils.youtube && (
                            <li>
                                <a href={socialprofils.youtube} target='_blank'>
                                    <FaYoutube />
                                </a>
                            </li>
                        )}
                        {socialprofils.instagram && (
                            <li>
                                <a href={socialprofils.instagram} target='_blank'>
                                    <FaInstagram />
                                </a>
                            </li>
                        )}
                        {socialprofils.mail && (
                            <li>
                                <a href={`mailto:${socialprofils.mail}`}>
                                    <FaEnvelope />
                                </a>
                            </li>
                        )}
                    </ul>
                    <p>Follow Me</p>
                </div>
            </div>
            <div className="main-footer__mid-line">
            </div>
            <p className="main-footer__bottom-txt">
                &copy; {currentYear} Created by <a target="_blank" rel="noreferrer" href="https://prathmesh-27.github.io/portfolio-v1/">Prathmesh Vairale</a>
            </p>
        </div>
    </footer>
    );
}

export default Footer;
