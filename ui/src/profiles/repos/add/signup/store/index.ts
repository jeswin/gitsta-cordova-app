import { createContext } from "react";
import { Actions } from "../actions";

export interface IState {
  gitsta: {
    usernameIsAvailable: boolean;
    repoCreation: {
      isCreating: boolean;
      success: boolean;
    };
  };
}

export const initialState: IState = {
  gitsta: {
    usernameIsAvailable: false,
    repoCreation: {
      isCreating: false,
      success: false
    }
  }
};

export const Context = createContext<{
  state: IState;
  dispatch: React.Dispatch<Actions>;
}>(undefined as any);
