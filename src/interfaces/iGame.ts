export enum Status {
  NotStarted = "Not started",
  InProgress = "In Progress",
  Finished = "Finished",
}

export interface GameState {
  players: Player[];
  gameName: string;
  winner: Player | null;
  gameStatus: Status;
}

export interface Player {
  id: string;
  name: string;
  status: Status;
  value?: number;
}
