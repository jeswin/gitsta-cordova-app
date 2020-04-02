import { Actions } from "../../actions";
import { IState } from "..";

export default function(state: IState, action: Actions): IState {
  switch (action.type) {
    case "GET_PROFILES":
      return { ...state, profiles: action.profiles };
    case "INIT_PROFILE":
      return {
        ...state,
        profiles: (state.profiles || []).concat([action.profile]),
        profileRepos: (state.profileRepos || []).concat([action.repo]),
        selectedProfile: action.profile.id
      };
    default:
      return state;
  }
}
