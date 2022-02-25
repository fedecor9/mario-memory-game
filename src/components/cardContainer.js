import { Card } from "./card";
import "../styles/main.css";

export const CardContainer = (props) => {
  const cards = props.cards;

  return (
    <div className="card-container">
      {cards.map((elem, i) => (
        <Card key={i} card={elem} />
      ))}
    </div>
  );
};
