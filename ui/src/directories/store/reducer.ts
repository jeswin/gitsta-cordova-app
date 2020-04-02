import { Actions } from "../actions";
import { IState } from ".";

export default function(state: IState, action: Actions): IState {
  switch (action.type) {
    case "ADD_DIRECTORY":
      return {
        ...state,
        directories: (state.directories || []).concat(action.directory)
      };
    case "SELECT_DIRECTORY":
      return { ...state, selectedDirectoryId: action.directoryId };
    case "LOAD_MEMBERS":
      return { ...state, members: action.members };
    default:
      return state;
  }
}
