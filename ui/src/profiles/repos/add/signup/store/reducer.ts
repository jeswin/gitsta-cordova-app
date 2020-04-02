import { IState } from "../store";
import { Actions } from "../actions";

export type Reducer = (state: IState, action: Actions) => IState;

export default function(state: IState, action: Actions): IState {
  return action.type === "GITSTA_USERNAME_AVAILABILITY"
    ? {
        ...state,
        gitsta: {
          ...state.gitsta,
          usernameIsAvailable: action.usernameIsAvailable
        }
      }
    : action.type === "BEGIN_CREATE_GITSTA_ACCOUNT"
    ? {
        ...state,
        gitsta: {
          ...state.gitsta,
          repoCreation: {
            isCreating: true,
            success: false
          }
        }
      }
    : action.type === "CREATED_GITSTA_ACCOUNT"
    ? {
        ...state,
        gitsta: {
          ...state.gitsta,
          repoCreation: {
            isCreating: false,
            success: true
          }
        }
      }
    : state;
}
