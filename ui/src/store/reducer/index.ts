import profilesReducer from "./profiles";
import feedReducer from "./feed";
import syncsReducer from "./syncs";
import { IState } from "..";
import { Actions } from "../../actions";

export type Reducer = (state: IState, action: Actions) => IState;

const reducers = [profilesReducer, feedReducer, syncsReducer];

export default function(state: IState, action: Actions): IState {
  for (const reducer of reducers) {
    const newState = reducer(state, action);
    if (newState !== state) {
      return newState;
    }
  }
  return state;
}
