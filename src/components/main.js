import "../styles/main.css";
import { createCards, shuffleArray, gameFinished, resetGame } from "../game";
import { CardGame } from "./cardGame";
import { SelectDifficulty } from "./selectDifficulty";
import { useEffect, useState } from "react";
import { FinishModal } from "./finishModal";

export const Main = (props) => {
  const initialCards = createCards();
  const [content, setContent] = useState(false);
  const [cards, setCards] = useState(initialCards);
  const [modal, setModal] = useState(false);

  const showCards = () => {
    setContent(true);
  };

  const selectDifficulty = () => {
    setContent(false);
  };

  const changeDifficulty = (num) => {
    setCards(shuffleArray(initialCards).slice(0, num));
    showCards();
  };

  const shuffleCards1 = (arr) => {
    setCards(shuffleArray(arr));
  };

  const shuffleCards = () => {
    setCards(shuffleArray(cards.slice()));
  };

  const cardSelected = (card) => {
    const newCards = cards.slice();
    let finish = false;
    newCards.forEach((elem) => {
      if (elem.image === card.image) {
        if (elem.selected === true) finish = true;
        elem.selected = true;
      }
    });
    if (finish === true) {
      console.log("finish");
      showModal();
      resetGame(newCards);
    } else props.changeScore();
    if (gameFinished(newCards)) {
      showModal();
      resetGame(newCards);
    } else shuffleCards1(newCards);
  };

  const showModal = () => {
    if (!modal) setModal((prevState) => !prevState);
  };

  const closeModal = () => {
    setModal((prevState) => !prevState);
    props.resetScore();
    selectDifficulty();
  };

  useEffect(() => {
    setCards(cards);
  }, [cards]);

  return (
    <div className="main-section">
      {modal ? (
        <FinishModal closeModal={closeModal} score={props.score} />
      ) : null}
      {content ? (
        <div>
          <CardGame
            cards={cards}
            shuffleCards={shuffleCards}
            selectCard={cardSelected}
          />
        </div>
      ) : (
        <SelectDifficulty handleChange={changeDifficulty} />
      )}
    </div>
  );
};
