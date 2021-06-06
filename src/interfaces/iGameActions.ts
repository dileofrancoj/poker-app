import { Player } from "./iGame";

export enum ActionType {
  AddPlayer,
  SetPlayerValue,
  ResetGame,
}

export interface AddPlayer {
  type: ActionType.AddPlayer;
  payload: Player;
}

export interface SetPlayerValue {
  type: ActionType.SetPlayerValue;
  payload: { id: string; value: number };
}

export interface ResetGame {
  type: ActionType.ResetGame;
}

export type GameActions = AddPlayer | SetPlayerValue | ResetGame;
