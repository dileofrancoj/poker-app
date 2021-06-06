import "./App.css";
import Poker from "./components/Poker";
import { GameProvider } from "./context/GameContext";

function App() {
  return (
    <GameProvider>
      <div className="App">
        <Poker />
      </div>
    </GameProvider>
  );
}

export default App;
