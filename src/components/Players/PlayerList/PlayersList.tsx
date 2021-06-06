import { useContext } from "react";

import { GameContext } from "../../../context/GameContext";
import { Player } from "../../../interfaces/iGame";
import "./PlayersList.css";

export const PlayersList = () => {
  const { state } = useContext(GameContext);
  return (
    <div className="PlayersList">
      <h4>Jugadores</h4>
      {state.players.map(({ id, name }: Player) => (
        <label key={id}>{name}</label>
      ))}
    </div>
  );
};
