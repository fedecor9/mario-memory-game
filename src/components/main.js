import "../styles/main.css";
import { createCards, shuffleArray } from "../game";
import { CardGame } from "./cardGame";
import { SelectDifficulty } from "./selectDifficulty";
import { useState } from "react";
import { FinishModal } from "./finishModal";

export const Main = (props) => {
  const initialCards = createCards();
  const [aux, setAux] = useState(false);
  const [cards, setCards] = useState(initialCards);
  const [modal, setModal] = useState(false);
  const change = () => {
    setAux((prevState) => !prevState);
  };

  const changeDifficulty = (num) => {
    setCards(shuffleArray(initialCards).slice(0, num));
    //console.log(num, cards);
  };

  const shuffleCards = () => {
    setCards(shuffleArray(cards.slice()));
    //console.log(cards);
  };

  const showModal = () => {
    setModal((prevState) => !prevState);
  };

  return (
    <div className="main-section">
      <button onClick={change}>Change</button>
      <button onClick={showModal}>Modal</button>
      {modal ? <FinishModal closeModal={showModal} /> : null}
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
