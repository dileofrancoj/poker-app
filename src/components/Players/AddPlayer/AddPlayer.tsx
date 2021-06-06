import { ChangeEvent, FormEvent, useContext, useState } from "react";
import shortId from "shortid";

import { GameContext } from "../../../context/GameContext";
import { addPlayer } from "../../../reducers/gameReducerActions";
import { Player, Status } from "../../../interfaces/iGame";

export const AddPlayer = () => {
  const { dispatch } = useContext(GameContext);
  const [playerName, setPlayerName] = useState<string>("");

  const handlePlayerNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value.trim());
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const player: Player = {
      id: shortId.generate(),
      name: playerName,
      status: Status.NotStarted,
    };

    dispatch(addPlayer(player));
    setPlayerName("");
  };
  return (
    <>
      <h4>Agregar un jugador 🔥</h4>
      <form onSubmit={handleSubmit}>
        <input
          value={playerName}
          type="text"
          onChange={handlePlayerNameChange}
        />
        <button type="submit" value="Submit" disabled={playerName === ""}>
          Agregar
        </button>
      </form>
    </>
  );
};
