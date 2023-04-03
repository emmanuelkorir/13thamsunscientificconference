import React from 'react';
import './banner.css';
import Conference from '../assets/conference.JPG';


function Banner() {
  return (
    <div className="banner__container">
        <div className="banner__container-row">
            <div className="banner__container-col">
                <h1>13<sup>th</sup>AMSUN Scientific Conference</h1>
                <h3>Theme: Exploring Frontiers of Medicine through Diversified Research</h3>
                <h4>25-26<sup>th</sup> May, 2023</h4>
                <h4>Venue: Chandaria Centre, University of Nairobi Main Campus</h4>
            </div>
            <div className="banner__container-col conference-div">
                <div className="conference__image">
                    <img src={Conference} alt="Conference" />
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Banner
