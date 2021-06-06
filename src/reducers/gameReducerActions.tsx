import { Player } from "../interfaces/iGame";
import {
  ActionType,
  AddPlayer,
  ResetGame,
  SetPlayerValue,
} from "../interfaces/iGameActions";

export const addPlayer = (player: Player): AddPlayer => ({
  type: ActionType.AddPlayer,
  payload: player,
});

export const resetGame = (): ResetGame => ({
  type: ActionType.ResetGame,
});

export const setPlayerValue = (id: string, value: number): SetPlayerValue => ({
  type: ActionType.SetPlayerValue,
  payload: { id, value },
});
