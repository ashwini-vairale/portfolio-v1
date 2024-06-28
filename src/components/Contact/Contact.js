import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { Col, Alert } from 'react-bootstrap';
import { contactConfig } from '../../content_option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: "",
        loading: false,
        show: false,
        alertMessage: "",
        variant: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ ...formData, loading: true });

        const templateParams = {
            from_name: formData.email,
            user_name: formData.name,
            to_name: contactConfig.YOUR_EMAIL,
            message: formData.message,
        };

        emailjs.send(
            contactConfig.YOUR_SERVICE_ID,
            contactConfig.YOUR_TEMPLATE_ID,
            templateParams,
            contactConfig.YOUR_USER_ID
        ).then(
            (result) => {
                console.log(result.text);
                setFormData({
                    email: "",
                    name: "",
                    message: "",
                    loading: false,
                    alertMessage: "SUCCESS! Thank you for your message.",
                    variant: "success",
                    show: true,
                });
            },
            (error) => {
                console.log(error.text);
                setFormData({
                    ...formData,
                    loading: false,
                    alertMessage: `Failed to send! ${error.text}`,
                    variant: "danger",
                    show: true,
                });
            }
        );
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="contact main-section">
            <div className="main-container">
                <h2 className="heading-secondary playfair-display">
                    <span className="heading-secondary__sm">Contact</span>
                    <span className="heading-secondary__main bold_500">
                        Feel free to contact me by submitting the form below and I will get back to you as soon as possible.
                    </span>
                </h2>
                {formData.show && (
                    <div className={`alert alert-${formData.variant}`}>
                        <p>{formData.alertMessage}</p>

                        <FontAwesomeIcon icon={faTimes} type="button" className="btn-close" onClick={() => setFormData({ ...formData, show: false })} />
                    </div>


                )}
                <div className="main-section__content">
                    <div className="contact__form-cont">

                        <form className="contact__form bold_500 comfortaa" onSubmit={handleSubmit}>
                            <div className="contact__form-field">
                                <label htmlFor="name" className="contact__form-field-label comfortaa">Name</label>
                                <input
                                    id="name"
                                    placeholder="Enter Your Name"
                                    type="text"
                                    className="contact__form-field-input"
                                    name="name"
                                    value={formData.name}
                                    autoComplete="name"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="contact__form-field">
                                <label htmlFor="email" className="contact__form-field-label comfortaa">Email</label>
                                <input
                                    id="email"
                                    placeholder="Enter Your Email"
                                    type="email"
                                    className="contact__form-field-input"
                                    name="email"
                                    value={formData.email}
                                    autoComplete="email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="contact__form-field">
                                <label htmlFor="message" className="contact__form-field-label comfortaa">Message</label>
                                <textarea
                                    id="message"
                                    placeholder="Enter Your Message"
                                    name="message"
                                    cols="30"
                                    rows="15"
                                    className="contact__form-field-input"
                                    value={formData.message}
                                    autoComplete="message"
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="contact__form-submit comfortaa btn"
                                disabled={formData.loading}
                            >
                                {formData.loading ? 'Sending...' : 'Submit'}
                            </button>
                            <p className="warning">Note* : If the contact form does not work properly, <a className="mail" href="mailto:ashwinivairale8@gmail.com">click here</a>.</p>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
