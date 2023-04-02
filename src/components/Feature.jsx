import React from 'react';
import './feature.css';
import Award from '../assets/award2.JPG';
import Speaker2 from '../assets/spk2.JPG';
import Speaker from '../assets/panel3.JPG';

const Feature = () => {
  return (
    <div className="feature">
      <div className="card">
        <div className="card-img">
          <img src={Speaker2} alt="Card 1" />
        </div>
        <div className="card-body">
          <h4>Excellent Speakers</h4>
          <p>Don't miss out on this opportunity to listen and learn from the best.</p>
        </div>
      </div>
      <div className="card">
        <div className="card-img">
          <img src={Award} alt="Card 2" />
        </div>
        <div className="card-body">
          <h4>Awards Ceremony</h4>
          <p>From breakthrough research to life-saving treatments, we'll recognize those who are making a difference.</p>
        </div>
      </div>
      <div className="card">
        <div className="card-img">
          <img src={Speaker} alt="Card 3" />
        </div>
        <div className="card-body">
          <h4>Expert Panel</h4>
          <p>Join our expert panel as they discuss the latest trends and innovations in healthcare.</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
