import { Actions as ProfileActions } from "../profiles/actions";
import { Actions as FeedActions } from "../feed/actions";
import { Actions as SyncActions } from "../syncs/actions";

export type Actions = ProfileActions | FeedActions | SyncActions;
