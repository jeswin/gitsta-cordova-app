import { Actions as MainStoreActions } from "../../../../../actions";
import { IState as IMainState } from "../../../../../store";
import { navigateTo } from "../../../../../lib/routing";
import { IState } from "../store";
import { IStore } from "../../../../../types";
import coreApiInvoke from "../../../../../lib/coreapi";

export type RepoAddAction = {
  repoUrl: string;
  username: string;
  password: string;
  type: "REPO_ADD";
};

export type Actions = RepoAddAction;

export async function addRepoAction(
  repoUrl: string,
  username: string,
  password: string,
  store: IStore<IState, Actions>,
  mainStore: IStore<IMainState, MainStoreActions>
) {
  window.alert({ repoUrl, username, password });
  const result = await coreApiInvoke({ repoUrl, username, password });
  store.dispatch({
    type: "REPO_ADD",
    repoUrl,
    username,
    password
  });
}
