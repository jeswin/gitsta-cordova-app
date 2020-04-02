import * as React from "react";
import { useContext } from "react";
import { Context } from "../store";
import NoRepos from "../components/NoRepos";
import { navigateOnError } from "../utils/error";
import Feed from "./components/Feed";

export default function FeedIndex() {
  const store = useContext(Context);

  const profiles = store.state.profiles || navigateOnError();

  return (
    <>
      {store.state.syncs?.length ? (
        !store.state.isFetchingFeed ? (
          <Feed feed={store.state.feed || { items: [] }} />
        ) : (
          <div>fetching...</div>
        )
      ) : (
        <NoRepos />
      )}
    </>
  );
}
