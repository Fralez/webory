import React from 'react';
import './Card.css';

const Card = ({ pairId, cardNo, index, isFlipped, handleClickCard, url="", text="" }) => (
  <div className="Card" onClick={() => handleClickCard(pairId, cardNo, index)}>
    {
      isFlipped ? (
        <div className="flipped-card">
          {url ? <img className="card-img" alt="img" src={url}></img> : text ? <span> {text} </span> : <></>}
        </div>
      ) : (
        <div className="card-reverse">
          
        </div>
      )
    }
  </div>
);

export default Card;