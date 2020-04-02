import { createContext } from "react";
import { Actions } from "../actions";
import { IPost } from "../types";

export interface IProfile {
  id: string;
  name: string;
  username: string;
  profilePic: string;
  repoUrl: string;
}

export interface IRepo {
  url: string;
  username?: string;
  password?: string;
  write: boolean;
}

export interface IFeed {
  items: IPost[];
}

export interface IState {
  profiles?: IProfile[];
  selectedProfile?: string;
  profileRepos?: IRepo[];
  syncs?: IRepo[];
  feed?: IFeed;
  isFetchingFeed?: boolean;
}

export const initialState: IState = {};

export const Context = createContext<{
  state: IState;
  dispatch: React.Dispatch<Actions>;
}>(undefined as any);
