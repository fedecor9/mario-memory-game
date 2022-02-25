import "../styles/main.css";
import { CardContainer } from "./cardContainer";

export const Main = (props) => {
  const cards = [
    {
      image: "/images/cards/mario.png",
      text: "Card 1",
      selected: false,
    },
    {
      image: "/images/cards/mario.png",
      text: "Card 1",
      selected: false,
    },
    {
      image: "/images/cards/mario.png",
      text: "Card 1",
      selected: false,
    },
    {
      image: "/images/cards/mario.png",
      text: "Card 1",
      selected: false,
    },
    {
      image: "/images/cards/mario.png",
      text: "Card 1",
      selected: false,
    },
    {
      image: "/images/cards/mario.png",
      text: "Card 1",
      selected: false,
    },
    {
      image: "/images/cards/mario.png",
      text: "Card 1",
      selected: false,
    },
  ];
  return (
    <div className="main-section">
      <h1>{cards.length}</h1>
      <CardContainer cards={cards} />
    </div>
  );
};
