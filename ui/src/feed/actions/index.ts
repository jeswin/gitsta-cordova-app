import { IState, IFeed } from "../../store";
import { IStore } from "../../types";
import { feed } from "../../dev/dummyData/new-repos-feed";

export type AppendFeedAction = {
  type: "APPEND_FEED";
  feed: IFeed;
};

export type Actions = AppendFeedAction;

export async function appendFeed(feed: IFeed, store: IStore<IState, Actions>) {
  store.dispatch({ type: "APPEND_FEED", feed });
}
