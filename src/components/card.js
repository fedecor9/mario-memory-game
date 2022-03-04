import { useEffect } from "react";
export const Card = (props) => {
  useEffect(() => {}, [props.card]);

  const selectCard = () => {
    props.shuffle(props.card);
  };

  return (
    <div className="card" onClick={selectCard}>
      <img src={props.card.image} alt={props.card.name} />
    </div>
  );
};
