import { Player, GameState, Status } from "../interfaces/iGame";
import { ActionType, GameActions } from "../interfaces/iGameActions";

export const initialGame: GameState = {
  players: [],
  gameName: "Game 1",
  winner: null,
  gameStatus: Status.NotStarted,
};

export function gameReducer(state: GameState, action: GameActions): GameState {
  switch (action.type) {
    case ActionType.AddPlayer:
      return { ...state, players: [action.payload, ...state.players] };
    case ActionType.ResetGame:
      return {
        ...initialGame,
        players: state.players.map((player) => ({
          ...player,
          status: Status.NotStarted,
          value: 0,
        })),
      };
    case ActionType.SetPlayerValue:
      let newState = {
        ...state,
        players: state.players.map((player: Player) =>
          player.id === action.payload.id
            ? {
                ...player,
                value: action.payload.value,
                status: Status.Finished,
              }
            : player
        ),
      };

      return {
        ...newState,
        winner: getWinner(newState.players),
        gameStatus: getGameStatus(newState),
      };

    default:
      return state;
  }
}

const getWinner = (players: Player[]): Player | null => {
  let winnerValue = 0;
  let winner = null;
  players.forEach((player) => {
    if (player.value && player.value > winnerValue) {
      winner = player;
      winnerValue = player.value || 0;
    }
  });
  return winner;
};

const getGameStatus = (state: GameState): Status => {
  const totalPlayers = state.players.length;
  let numberOfPlayersPlayed = 0;
  state.players.forEach((player) => {
    if (player.status === Status.Finished) {
      numberOfPlayersPlayed++;
    }
  });
  if (numberOfPlayersPlayed === 0) {
    return Status.NotStarted;
  }
  if (totalPlayers === numberOfPlayersPlayed) {
    return Status.Finished;
  }
  return Status.InProgress;
};
