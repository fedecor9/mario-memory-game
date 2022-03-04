import { Card } from "./card";
import "../styles/main.css";
import { useTransition, animated } from "react-spring";
export const CardContainer = (props) => {
  const cards = props.cards;
  const transition = useTransition(cards, {
    to: { opacity: 1 },
    from: { opacity: 0 },
  });
  return (
    <div className="card-container">
      {cards.map((elem, i) => (
        <Card key={i} card={elem} shuffle={props.shuffle} />
      ))}
    </div>
  );
};
