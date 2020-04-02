import { Actions as MainStoreActions } from "../../../../../actions";
import { IState as IMainState } from "../../../../../store";
import { navigateTo } from "../../../../../lib/routing";
import { IState } from "../store";
import { IStore } from "../../../../../types";

export type GitstaUsernameAvailabilityAction = {
  type: "GITSTA_USERNAME_AVAILABILITY";
  usernameIsAvailable: boolean;
};

export type GitstaBeginCreateAccountAction = {
  type: "BEGIN_CREATE_GITSTA_ACCOUNT";
};

export type GitstaCreateAccountAction = {
  type: "CREATED_GITSTA_ACCOUNT";
};

export type Actions =
  | GitstaUsernameAvailabilityAction
  | GitstaBeginCreateAccountAction
  | GitstaCreateAccountAction;

export async function getGitstaUsernameAvailability(
  username: string,
  store: IStore<IState, Actions>
) {
  // TODO: Call https://api.gitsta.com/profiles/username/exists
  store.dispatch({
    type: "GITSTA_USERNAME_AVAILABILITY",
    usernameIsAvailable: true
  });
}

export async function beginCreateAccount(store: IStore<IState, Actions>) {
  return store.dispatch({ type: "BEGIN_CREATE_GITSTA_ACCOUNT" });
}

export async function createAccount(
  name: string,
  email: string,
  username: string,
  password: string,
  store: IStore<IState, Actions>,
  mainStore: IStore<IMainState, MainStoreActions>
) {
  // TODO: 1. Create a repo.
  // TODO: 2. Insert basic data - viz  name and profile pic
  const repoUrl = "http://www.gitsta.com/jeswin";
  const profileId = `${username}@gitsta.com`;

  const profile = {
    id: profileId,
    username,
    name,
    profilePic: "",
    repoUrl,
    email
  };

  const repo = {
    url: repoUrl,
    username,
    password,
    write: true
  };

  mainStore.dispatch({
    type: "INIT_PROFILE",
    profile,
    repo
  });

  navigateTo(`/profiles/${profileId}/pic`);

  store.dispatch({
    type: "CREATED_GITSTA_ACCOUNT"
  });
}
