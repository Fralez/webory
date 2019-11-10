import React from "react";
import "./Card.css";

const Card = ({
  pairId,
  cardNo,
  index,
  isFlipped,
  handleClickCard,
  url = "",
  text = ""
}) => (
  <div className="Card" onClick={() => handleClickCard(pairId, cardNo, index)}>
    <div className={`flipped-card ${isFlipped ? `visible` : `invisible`}`}>
      {url ? (
        <img className="card-img" alt={url} src={url}></img>
      ) : text ? (
        <span> {text} </span>
      ) : (
        <></>
      )}
    </div>
    <div className={`card-reverse ${!isFlipped ? `visible` : `invisible`}`}></div>
  </div>
);

export default Card;
