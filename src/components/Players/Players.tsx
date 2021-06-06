import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

import { Player, Status } from "../../interfaces/iGame";
import { setPlayerValue } from "../../reducers/gameReducerActions";
import "./Players.css";

const Players = (): JSX.Element => {
  const { state, dispatch } = useContext(GameContext);

  const playPlayer = (id: string): void => {
    const randomValue: number = Math.floor(Math.random() * 100);
    dispatch(setPlayerValue(id, randomValue));
  };
  return (
    <div>
      <h4>Estado de jugadores</h4>
      <div className="PlayersContainer">
        {state.players.map(({ id, name, status, value }: Player) => (
          <div key={id} className="Player">
            <label>Name: {name}</label>
            <label>Status : {status}</label>
            <label>Card Value: {value}</label>
            <button
              disabled={status !== Status.NotStarted}
              onClick={() => playPlayer(id)}
            >
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
