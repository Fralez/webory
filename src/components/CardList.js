import React, { useState, useEffect } from 'react';
import './CardList.css';
import { getPairs } from './api';
import Card from './Card';

function CardList() {
  const [pairs, setPairs] = useState([]);
  const [isCardOne, setCardOne] = useState(false);
  const [isCardTwo, setCardTwo] = useState(false);
  
  const handleClickCard = (pairId, cardNo, index) => {
    let newPairs = pairs;
    cardNo === 1 ? newPairs[index].isFlippedOne = true : newPairs[index].isFlippedTwo = true;
    
    isCardOne ? setCardTwo(true) : setCardOne(true);
    
    if (isCardOne && isCardTwo) {
      newPairs.forEach(pair => {
        if (pair.isFlippedOne && pair.isFlippedTwo) {
          pair.isFound = true;
        }
        
      })
    }
    setPairs([ ...newPairs ]);
  }

  useEffect(() => {
    getPairs().then(apiPairs => {
      setPairs(apiPairs)
    })
  }, []);

  return (
    <div className="CardList">
      {
        pairs ? pairs.map((pair, index) => (
          <>
            <Card index={index} url={pair.cardOne} isFlipped={pair.isFlippedOne} pairId={pair.id} cardNo={1} handleClickCard={handleClickCard} />
            <Card index={index} text={pair.cardTwo} isFlipped={pair.isFlippedTwo} pairId={pair.id} cardNo={2} handleClickCard={handleClickCard} />
          </>
        )) : <></>
      }
    </div>
  );
}

export default CardList;
