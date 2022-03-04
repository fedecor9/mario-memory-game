import { CardContainer } from "./cardContainer";
import "../styles/main.css";

export const CardGame = (props) => {
  let cards = props.cards;
  //cards = shuffleArray(cards);
  return (
    <div className="">
      <h1>{cards.length}</h1>
      <button onClick={props.shuffleCards}>Shuffle</button>
      <CardContainer cards={cards} shuffle={props.selectCard} />
    </div>
  );
};
