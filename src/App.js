import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header";
import { Main } from "./components/main";

function App() {
  return (
    <div className="App flex-y">
      <Header score={20} bestScore={35} />
      <Main />
    </div>
  );
}

export default App;
