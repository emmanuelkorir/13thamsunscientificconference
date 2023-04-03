import React from 'react';
import './speaker.css';

const Speaker = ({image, name, position, bio}) => {
  return (
    <div className="presenter-card">
      <div className="presenter-image-container">
        <img src={image} alt={name} className="presenter-image" />
      </div>
      <div className="presenter-info">
        <h2 className="presenter-name">{name}</h2>
        <p className="presenter-position">{position}</p>
        <p className="presenter-bio">{bio}</p>
      </div>
    </div>
  );
};

export default Speaker;
