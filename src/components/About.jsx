import React from 'react';
import './about.css';

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-header">
        <h2>Association of Medical Students of the University of Nairobi (AMSUN) presents</h2>
      </div>
      <div className="about-content">
        <p>The 13th AMSUN Scientific Conference will be held on May 21st and all members are invited. The conference will cover interesting topics such as AMR, Surgery, and Internal Medicine. We have great speakers lined up for this event.</p>
      </div>
      <div className="about-speakers">
        <h3>Featured Speakers:</h3>
        <ul>
          <li>Dr. John Smith</li>
          <li>Dr. Jane Doe</li>
          <li>Dr. Michael Lee</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutSection;
