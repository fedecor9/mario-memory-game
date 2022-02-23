import "../styles/header.css";
import logo from "../mario.png";
export const Header = (props) => {
  return (
    <header>
      <div className="header">
        <div className="score">
          <img src={logo} width="80px"></img>
          <h2>Memory game</h2>
        </div>
        <div className="score">
          <h2>Score: {props.score}</h2>
          <h2>Best score: {props.bestScore}</h2>
        </div>
      </div>
    </header>
  );
};
