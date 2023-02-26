import React from 'react';
import './Exersice.css'
//Exersice Image with Caption
const Exersice = (props) => {
  return (
    <div className="main-div">
      <img src={props.src} className="image" />
      <p class="name">{props.name}</p>
    </div>
  );
};

export default Exersice;
