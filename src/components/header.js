import "../styles/header.css";

export const Header = (props) => {
  return (
    <header>
      <div className="header">
        <div className="score">
          <img
            src="/images/cards/mario.png"
            width="80px"
            alt="mario logo"
          ></img>
          <h2>Memory game</h2>
        </div>
        <div className="score">
          <h2>Score: {props.score} |</h2>
          <h2>Best score: {props.bestScore}</h2>
        </div>
      </div>
    </header>
  );
};
