import React from 'react';
import './ExersiceCard.css';

const ExersiceCard = (props) => {
  return (
    <div className="ExersiceCardDiv">
      <h1 className="CardHeading">{props.title}</h1>
      <img src={props.src} />
      <p>{props.description}</p>
    </div>
  );
};
export default ExersiceCard;