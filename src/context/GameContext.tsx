import { createContext, useReducer } from "react";
import { gameReducer, initialGame } from "../reducers/gameReducer";
import { GameState } from "../interfaces/iGame";
import { GameActions } from "../interfaces/iGameActions";

type ContextType = {
  state: GameState;
  dispatch: React.Dispatch<GameActions>;
};

const contextDefaultValues: ContextType = {
  state: initialGame,
  dispatch: () => undefined,
};

export const GameContext = createContext<ContextType>(contextDefaultValues);

const { Provider } = GameContext;

export const GameProvider: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(gameReducer, initialGame);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
