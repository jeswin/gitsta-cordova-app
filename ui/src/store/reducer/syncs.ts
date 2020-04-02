import { Actions } from "../../actions";
import { IState } from "..";

export default function(state: IState, action: Actions): IState {
  switch (action.type) {
    case "ADD_SYNCS":
      return { ...state, syncs: action.repos };
    default:
      return state;
  }
}
