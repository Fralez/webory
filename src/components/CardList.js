import React, { useState, useEffect } from "react"; // Importo 2 React Hooks: useState() y useEffect()
import "./CardList.css";
import { getPairs } from "./api";
import Card from "./Card";

function CardList() {
  // State hook que guarda los pares de cartas
  const [pairs, setPairs] = useState([]);
  // State hook que guarda si la primera carta está dada vuelta
  const [isCardOne, setCardOne] = useState(false);
  // State hook que guarda si la segunda carta está dada vuelta
  const [isCardTwo, setCardTwo] = useState(false);
  // State hook que guarda si el jugador puede jugar
  const [canPlay, setCanPlay] = useState(true);
  const [lastCardClicked, setLastCardClicked] = useState({
    pairId: 0,
    cardNo: 0
  });

  // Método para manejar el click de una carta
  const handleClickCard = (pairId, cardNo, index) => {
    // Nuevo array de pares que va a sustituir los actuales
    let newPairs = pairs;
    setLastCardClicked({ pairId, cardNo });

    // Si el par de la carta clickeado no está encontrado aún
    if (
      !newPairs[index].isFound &&
      // Si los datos de la última carta clickeada no coinciden con los datos de la carta clickeada (es decir, no clickeaste la misma carta 2 veces)
      !(lastCardClicked.pairId === pairId && lastCardClicked.cardNo === cardNo)
    ) {
      // Si el cardNo es 1, entonces se actualiza el isFlipped de la carta 1 en el par del index pasado; sino se actualiza el de la carta 2 en el par del index pasado
      cardNo === 1
        ? (newPairs[index].isFlippedOne = true)
        : (newPairs[index].isFlippedTwo = true);

      // Si ya hay una carta dada vuelta, indica que hay una segunda carta dada vuelta; sino indica que la primera carta fue dada vuelta
      if (isCardOne) {
        setCardTwo(true);
      } else {
        setCardOne(true);
      }
      // Actualizar los pares por los nuevos pares
      setPairs([...newPairs]);
    }
  };

  const checkFoundPairs = () => {
    // Si hay 2 cartas dadas vuelta, verifico si son del mismo par
    if (isCardOne && isCardTwo) {
      pairs.forEach(pair => {
        // Si ambos isFlipped de un par son true, entonces el par fue encontrado. Resetear las cards dadas vuelta en juego
        if (pair.isFlippedOne && pair.isFlippedTwo) {
          pair.isFound = true;
        }
      });
      resetPairs();
    }
  };

  const foundAllPairs = () => {
    if(pairs.length > 0) {
      const pairsFound = pairs.filter(pair => pair.isFound);
      return pairs.length === pairsFound.length;
    }

    return false;
  };

  const resetPairs = () => {
    // El jugador no puede jugar porque se están mostrando las cartas
    setCanPlay(false);
    // Esperar un segundo porque se están mostrando las cartas
    setTimeout(() => {
      pairs.forEach(pair => {
        // Si alguna de las cartas del par no se encontró, entonces no se encontró el par; resetear las cartas del par en ese caso.
        if (!pair.isFlippedOne || !pair.isFlippedTwo) {
          pair.isFlippedOne = false;
          pair.isFlippedTwo = false;
        }
      });
      // Resetear las cartas en juego
      setCardOne(false);
      setCardTwo(false);
      // Resetear la última carta dada vuelta
      setLastCardClicked({
        pairId: 0,
        cardNo: 0
      });
      // El jugador puede volver a jugar
      setCanPlay(true);
    }, 500);
  };

  const win = () => {
    alert(
      "Felicitaciones, has ganado!!! Recarga la página para jugar nuevamente."
    );
  };

  // useEffect() es un hook que actúa como un didComponentMount y como un didComponentUpdate
  useEffect(() => {
    // Checkear que el jugador ganó y encontró todos los pares
    if (foundAllPairs()) {
      setTimeout(() => {
        win();
      }, 100);
    }
    // Checkear que haya un par encontrado
    checkFoundPairs();
    // Llamar a la api para obtener los pares y asignarlo a la variable pairs si no se hizo antes
    if (!pairs.length) {
      getPairs().then(apiPairs => {
        setPairs(apiPairs);
      });
    }
  });

  return (
    <div className="CardList">
      {/* Recorre todos los pares usando .map() */}
      {pairs ? (
        pairs.map((pair, index) => (
          <>
            {/* Cada card recibe como prop la función que se va a ejecutar cuando se clickee la misma */}
            <Card
              index={index}
              url={pair.cardOne}
              isFlipped={pair.isFlippedOne}
              pairId={pair.id}
              cardNo={1}
              handleClickCard={canPlay ? handleClickCard : () => {}}
            />
            <Card
              index={index}
              text={pair.cardTwo}
              isFlipped={pair.isFlippedTwo}
              pairId={pair.id}
              cardNo={2}
              handleClickCard={canPlay ? handleClickCard : () => {}}
            />
          </>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default CardList;
