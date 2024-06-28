import React, { useState } from 'react';
import './Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Portfolio = ({ heading, portfoliodata }) => {
    const [isPopUpVisible, setPopUpVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleImageClick = (data) => {

        setSelectedItem(data);
        setPopUpVisible(true);
    };

    const closePopUp = () => {
        setPopUpVisible(false);
        setSelectedItem(null);
    };

    return (
        <section id="projects" className="">
            <div className="main-container">
                <h2 className="heading-secondary projects__heading-secondary">
                    <span className="heading-secondary__sm playfair-display bold_700"> {heading.head}</span>
                </h2>

                <div className="mb-5 po_items_ho">
                    {portfoliodata.map((data, i) => (
                        <div key={i} className="po_item" onClick={() => handleImageClick(data)}>
                            <img src={data.img} alt="" />
                            <div className="content dosis">
                                <p>{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {isPopUpVisible && selectedItem && (
                    <div className='pop-up'>
                        <FontAwesomeIcon className='times' icon={faTimes} onClick={closePopUp} />
                        <a href={selectedItem.link} target='_blank' rel="noreferrer" > <img src={selectedItem.img} alt="project" /></a>

                    </div>
                )}
            </div>
        </section>
    );
}

export default Portfolio;
