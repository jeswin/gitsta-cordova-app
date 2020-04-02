import { IState } from "../store";
import { Actions } from "../actions";

export type Reducer = (state: IState, action: Actions) => IState;

export default function(state: IState, action: Actions): IState {
  return state;
}
