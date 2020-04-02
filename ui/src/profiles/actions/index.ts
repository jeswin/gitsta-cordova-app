import { IProfile, IRepo, IState } from "../../store";

export type GetProfilesAction = {
  type: "GET_PROFILES";
  profiles: IProfile[];
};

export type InitProfileAction = {
  type: "INIT_PROFILE";
  profile: IProfile;
  repo: IRepo;
};

export type Actions = GetProfilesAction | InitProfileAction;

export async function getProfiles(store: {
  state: IState;
  dispatch: React.Dispatch<Actions>;
}) {
  store.dispatch({ type: "GET_PROFILES", profiles: [] });
}
