import * as React from "react";
import { useContext } from "react";
import { Grid, GridCell } from "@rmwc/grid";
import { navigateTo } from "../../lib/routing";
import { IFeed, Context } from "../../store";
import Post from "../../post/components/Post";
import { IPost } from "../../types";

export type FeedProps = {
  feed: IFeed;
};

export default function Feed(props: FeedProps) {
  const store = useContext(Context);

  function feedItemClick(feedItem: IPost) {
    return () => {
      navigateTo(`/people/${feedItem.author.id}`);
    };
  }

  return (
    <div>
      {props.feed.items.map(item => (
        <Post item={item} />
      ))}
    </div>
  );
}
