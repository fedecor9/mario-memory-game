import { useState } from "react";
import "./App.css";
import { Header } from "./components/header";
import { Main } from "./components/main";

function App() {
  const [score, setScore] = useState({ current: 0, bestScore: 0 });

  const changeScore = () => {
    const newScore = {
      current: score.current + 1,
      bestScore: score.bestScore,
    };
    if (newScore.current >= newScore.bestScore)
      newScore.bestScore = newScore.current;
    setScore(newScore);
  };

  const resetScore = () => {
    setScore({ ...score, current: 0 });
  };

  return (
    <div className="App flex-y">
      <Header score={score.current} bestScore={score.bestScore} />
      <Main
        changeScore={changeScore}
        resetScore={resetScore}
        score={score.current}
      />
    </div>
  );
}

export default App;
