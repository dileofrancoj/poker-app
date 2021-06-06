import { useContext } from "react";
import { resetGame } from "../../reducers/gameReducerActions";
import { Status } from "../../interfaces/iGame";
import { GameContext } from "../../context/GameContext";
import "./GameStatus.css";

export const GameStatus = () => {
  const { state, dispatch } = useContext(GameContext);
  return (
    <div className="GameStatus">
      <div className="Status">
        <h4>Estado</h4>
        <label>{state.gameStatus}</label>
        <button onClick={() => dispatch(resetGame())}>Comenzar de nuevo</button>
      </div>
      <div className="Winner">
        {state.gameStatus === Status.InProgress && (
          <label>
            Liderando la batalla : {state.winner?.name} con{" "}
            {state.winner?.value} puntitos😎
          </label>
        )}
        {state.gameStatus === Status.Finished && (
          <label>
            Ganad@r: {state.winner?.name} by {state.winner?.value}
          </label>
        )}
      </div>
    </div>
  );
};
