import "./Poker.css";
import Players from "./Players/Players";
import { AddPlayer } from "./Players/AddPlayer/AddPlayer";
import { GameStatus } from "./GameStatus/GameStatus";
import { PlayersList } from "./Players/PlayerList/PlayersList";

const Poker = (): JSX.Element => {
  return (
    <>
      <div className="Header">
        <AddPlayer />
      </div>
      <div className="ContentArea">
        <div className="LeftPanel">
          <PlayersList />
        </div>
      </div>

      <div className="MainContentArea">
        <Players />
      </div>
      <div className="RightPanel">
        <GameStatus />
      </div>
    </>
  );
};

export default Poker;
