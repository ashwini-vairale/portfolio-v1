import React from 'react';
import './Paper.css'

function Papers({ portfoliodata }) {
    const handleViewPaper = (event, link) => {
        event.preventDefault();
        console.log('Viewing paper:', link);
        window.open(link, '_blank');
    };

    return (
        <section className='papers'>
            <div className="main-container">
                <h2 className="heading-secondary projects__heading-secondary">
                    <span className="heading-secondary__sm playfair-display bold_700">Papers</span>
                    <span className="heading-secondary__main playfair-display ">
                        This is the papers section
                    </span>
                </h2>

                <div className="mb-5 paper_items_ho">
                    {portfoliodata.map((paper, index) => (
                        <div key={index} className="paper_item dosis">
                            <h3>{index + 1}.</h3>
                            <h3>{paper.description}</h3>
                            <a href={paper.link} onClick={(e) => handleViewPaper(e, paper.link)} target='_blank' rel="noreferrer">View Paper</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Papers;
