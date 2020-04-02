import { IState } from "../../store";
import { IStore } from "../../types";
import { IRepo } from "../../store";
import { Actions as MainStoreActions } from "../../actions/index";
import { appendFeed } from "../../feed/actions";
import { feed as dummyFeed } from "../../dev/dummyData/new-repos-feed";

export type AddSyncsAction = {
  type: "ADD_SYNCS";
  repos: IRepo[];
};

export type Actions = AddSyncsAction;

export async function addSyncs(
  repos: IRepo[],
  store: IStore<IState, MainStoreActions>
) {
  store.dispatch({
    type: "ADD_SYNCS",
    repos
  });

  appendFeed({ items: dummyFeed }, store);
}
