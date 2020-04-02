import { IDirectory, IState, IUser } from "../store";
import { directories } from "../../dev/dummyData/directories";
import { fromUrl } from "../../lib/identifiers";
import { IStore } from "../../types";
import { members } from "../../dev/dummyData/members";

export type AddDirectoryAction = {
  type: "ADD_DIRECTORY";
  directory: IDirectory;
};

export type LoadMembersAction = {
  type: "LOAD_MEMBERS";
  members: IUser[];
};

export type SelectDirectoryAction = {
  type: "SELECT_DIRECTORY";
  directoryId: string;
};

export type Actions =
  | AddDirectoryAction
  | LoadMembersAction
  | SelectDirectoryAction;

export async function loadDirectories(store: IStore<IState, Actions>) {
  directories.forEach(directory => {
    store.dispatch({
      type: "ADD_DIRECTORY",
      directory: { ...directory, id: fromUrl(directory.url) }
    });
  });
}

export async function addDirectory(
  directory: IDirectory,
  store: IStore<IState, Actions>
) {
  store.dispatch({
    type: "ADD_DIRECTORY",
    directory
  });
}

export async function selectDirectory(
  directoryId: string,
  store: IStore<IState, Actions>
) {
  store.dispatch({
    type: "SELECT_DIRECTORY",
    directoryId
  });

  loadDirectoryMembers(directoryId, members, store);
}

export async function loadDirectoryMembers(
  dirId: string,
  members: IUser[],
  store: IStore<IState, Actions>
) {
  // TODO: load members via ajax.
  store.dispatch({
    type: "LOAD_MEMBERS",
    members
  });
}
