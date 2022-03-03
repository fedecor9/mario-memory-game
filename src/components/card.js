export const Card = (props) => {
  const card = props.card;

  return (
    <div className="card ">
      <img src={card.image} alt={card.name}></img>
    </div>
  );
};
