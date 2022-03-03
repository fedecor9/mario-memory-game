import "../styles/main.css";
import { createCards, shuffleArray } from "../game";
import { CardGame } from "./cardGame";
import { SelectDifficulty } from "./selectDifficulty";
import { useEffect, useState } from "react";

export const Main = (props) => {
  const initialCards = createCards();
  const [aux, setAux] = useState(false);
  const [cards, setCards] = useState(initialCards);
  const change = () => {
    setAux((prevState) => !prevState);
  };

  const changeDifficulty = (num) => {
    setCards(initialCards.slice(0, num));
    //console.log(num, cards);
  };

  const shuffleCards = () => {
    setCards(shuffleArray(cards.slice()));
    //console.log(cards);
  };

  return (
    <div className="main-section">
      <button onClick={change}>Change</button>
      {aux ? (
        <div>
          <CardGame cards={cards} shuffleCards={shuffleCards} />
        </div>
      ) : (
        <SelectDifficulty handleChange={changeDifficulty} />
      )}
    </div>
  );
};
