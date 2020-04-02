import { createContext } from "react";
import { Actions } from "../actions";

export interface IDirectoryData {
  name: string;
  icon?: string;
  description: string;
  accessibility: "public" | "private";
  props?: { [key: string]: string };
  url: string;
}

export interface IDirectory extends IDirectoryData {
  id: string;
}

export interface IUser {
  name: string;
  profilePic: string;
  status: string;
  repoUrl: string;
  props?: { [key: string]: string };
}

export interface IState {
  directories?: IDirectory[];
  selectedDirectoryId?: string;
  members?: IUser[];
}

export const initialState: IState = {};

export const Context = createContext<{
  state: IState;
  dispatch: React.Dispatch<Actions>;
}>(undefined as any);
