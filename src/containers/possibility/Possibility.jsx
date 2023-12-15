import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

//Import possibility image from assets
const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>There's so much to explore within AI: its applications in various industries like healthcare, finance, and entertainment; 
        the different types of AI (like machine learning, natural language processing, computer vision); 
        the ethical considerations surrounding AI development; and the potential impact it might have on society in the future. </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;