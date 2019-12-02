import React from 'react';
import './ResultCard.css';

const ResultCard = ({title, imageURL, referal}) =>{
  return(
    <a href = {referal} target="_blank" rel="noopener noreferrer">
      <div className ="res-Card">
        <h3>{title}</h3>
        <img className="listImage" src = {imageURL} alt=''/>
      </div>
    </a>

  );
}

export default ResultCard;
