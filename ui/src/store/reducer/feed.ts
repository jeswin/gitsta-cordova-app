import { Actions } from "../../actions";
import { IState } from "..";

export default function(state: IState, action: Actions): IState {
  switch (action.type) {
    case "APPEND_FEED":
      return {
        ...state,
        feed: {
          items: ((state.feed && state.feed.items) || []).concat(
            action.feed.items
          )
        }
      };
    default:
      return state;
  }
}
