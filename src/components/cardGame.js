import { CardContainer } from "./cardContainer";
import { shuffleArray } from "../game";

import "../styles/main.css";
import { useEffect, useState } from "react";

export const CardGame = (props) => {
  let cards = props.cards;
  //cards = shuffleArray(cards);
  return (
    <div className="">
      <h1>{cards.length}</h1>
      <button onClick={props.shuffleCards}>Shuffle</button>
      <CardContainer cards={cards} />
    </div>
  );
};
