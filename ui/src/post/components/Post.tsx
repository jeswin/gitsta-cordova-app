import * as React from "react";
import { useContext, useState, useEffect } from "react";
import { Grid, GridCell } from "@rmwc/grid";
import { navigateTo } from "../../lib/routing";
import { Context } from "../../store";
import {
  IUIDefinition,
  IPost,
  UICell,
  UICellTypes,
  IUICell
} from "../../types";
import { run } from "./plugins";
import Audio from "./widgets/Audio";
import Field from "./widgets/Field";
import Hashtags from "./widgets/Hashtags";
import Image from "./widgets/Image";
import Icons from "./widgets/Icons";
import ImageGallery from "./widgets/ImageGallery";
import Location from "./widgets/Location";
import Markdown from "./widgets/Markdown";
import ProfileBlock from "./widgets/ProfileBlock";
import Rating from "./widgets/Rating";
import Table from "./widgets/Table";
import Text from "./widgets/Text";
import Video from "./widgets/Video";
import Buttons from "./widgets/Buttons";

export type PostProps = {
  item: IPost;
};

export type WidgetProps<T extends UICell> = {
  cell: T;
};

const widgets = {
  audio: Audio,
  buttons: Buttons,
  field: Field,
  hashtags: Hashtags,
  icons: Icons,
  image: Image,
  "image-gallery": ImageGallery,
  location: Location,
  markdown: Markdown,
  profile: ProfileBlock,
  rating: Rating,
  table: Table,
  text: Text,
  video: Video
};

export default function Post(props: PostProps) {
  const store = useContext(Context);
  const [state, updateState] = useState(undefined as IUIDefinition | undefined);

  useEffect(() => {
    (async () => {
      const uiDef = await run(props.item);
      updateState(uiDef);
    })();
  }, []);

  function postClick(feedItem: IPost) {
    return () => {
      navigateTo(`/people/${feedItem.author.id}`);
    };
  }

  const styles = {
    grid: {
      padding: "0 0 12px 0",
      boxShadow: "0 6px 4px -4px gray",
      marginBottom: "16px"
    }
  };

  return state === undefined ? (
    <div>Loading...</div>
  ) : (
    <Grid style={styles.grid}>
      {state.cells.map((cell, i) => {
        const Component = widgets[cell.type as UICellTypes];
        return (
          <GridCell key={i} span={cell.span || 4}>
            {cell.type === "audio" ? (
              <Audio cell={cell} />
            ) : cell.type === "buttons" ? (
              <Buttons cell={cell} />
            ) : cell.type === "field" ? (
              <Field cell={cell} />
            ) : cell.type === "hashtags" ? (
              <Hashtags cell={cell} />
            ) : cell.type === "icons" ? (
              <Icons cell={cell} />
            ) : cell.type === "image" ? (
              <Image cell={cell} />
            ) : cell.type === "image-gallery" ? (
              <ImageGallery cell={cell} />
            ) : cell.type === "location" ? (
              <Location cell={cell} />
            ) : cell.type === "markdown" ? (
              <Markdown cell={cell} />
            ) : cell.type === "profile" ? (
              <ProfileBlock cell={cell} />
            ) : cell.type === "rating" ? (
              <Rating cell={cell} />
            ) : cell.type === "table" ? (
              <Table cell={cell} />
            ) : cell.type === "text" ? (
              <Text cell={cell} />
            ) : cell.type === "video" ? (
              <Video cell={cell} />
            ) : (
              <div>Unknown</div>
            )}
          </GridCell>
        );
      })}
    </Grid>
  );
}
