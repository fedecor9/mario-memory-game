import "../styles/main.css";
import "../App.css";

export const SelectDifficulty = (props) => {
  const easy = () => {
    props.handleChange(6);
  };
  const medium = () => {
    props.handleChange(12);
  };
  const hard = () => {
    props.handleChange(16);
  };

  return (
    <div className="select-difficulty">
      <div>
        <h1>Select Difficulty</h1>
      </div>
      <div className="options">
        <button onClick={easy}>Easy</button>
        <button onClick={medium}>Medium</button>
        <button onClick={hard}>Hard</button>
      </div>
    </div>
  );
};
