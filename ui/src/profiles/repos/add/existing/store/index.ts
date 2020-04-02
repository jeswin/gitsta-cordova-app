import { createContext } from "react";
import { Actions } from "../actions";

export interface IState {}

export const initialState: IState = {};

export const Context = createContext<{
  state: IState;
  dispatch: React.Dispatch<Actions>;
}>(undefined as any);
