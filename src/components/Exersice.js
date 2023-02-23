import React from 'react';
//Exersice Image with Caption
// const CardVisible = () => {
//  $(document).ready 
// }
const Exersice = (props) => {
  return (
    <div className="main-div">
      <img src={props.src} className="image" />
      <p className="name">{props.name}</p>
    </div>
  );
};

export default Exersice;
