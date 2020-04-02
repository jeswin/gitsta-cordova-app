import * as React from "react";
import { useContext } from "react";
import {
  List,
  ListItem,
  ListItemGraphic,
  ListItemText,
  ListItemPrimaryText,
  ListItemSecondaryText
} from "@rmwc/list";
import { Grid, GridCell } from "@rmwc/grid";
import { IDirectory, Context } from "../store";
import { navigateTo } from "../../lib/routing";
import { selectDirectory } from "../actions";

export type DirectoriesProps = {
  directories: IDirectory[];
};

export default function Directories(props: DirectoriesProps) {
  const store = useContext(Context);

  function directoryClick(dir: IDirectory) {
    return () => {
      selectDirectory(dir.id, store);
      navigateTo(`/directories/${dir.id}`);
    };
  }

  return (
    <Grid style={{ margin: "auto" }}>
      <GridCell>
        <List twoLine>
          {props.directories.map(dir => (
            <ListItem onClick={directoryClick(dir)} key={dir.id}>
              <ListItemGraphic
                icon={dir.icon}
                style={{
                  backgroundSize: "cover",
                  padding: "0.3em",
                  borderRadius: "100%"
                }}
              />
              <ListItemText>
                <ListItemPrimaryText>{dir.name}</ListItemPrimaryText>
                <ListItemSecondaryText>{dir.description}</ListItemSecondaryText>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </GridCell>
    </Grid>
  );
}
