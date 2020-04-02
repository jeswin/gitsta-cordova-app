import * as React from "react";
import { useContext } from "react";
import { Button } from "@rmwc/button";
import {
  List,
  ListItem,
  ListItemGraphic,
  ListItemText,
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemMeta
} from "@rmwc/list";
import { Grid, GridCell } from "@rmwc/grid";
import { Checkbox } from "@rmwc/checkbox";
import { IUser } from "../store";
import { navigateTo } from "../../lib/routing";
import { Context } from "../../store";
import { addSyncs } from "../../syncs/actions";

export type DirectoryProps = {
  members: IUser[];
};

export default function Directory(props: DirectoryProps) {
  const store = useContext(Context);

  const [members, updateMembers] = React.useState(
    props.members.map(u => ({
      ...u,
      checked: false
    }))
  );

  function toggleSelection(user: IUser & { checked: boolean }) {
    return () => {
      updateMembers(
        members.map(m =>
          m === user
            ? {
                ...m,
                checked: !m.checked
              }
            : m
        )
      );
    };
  }

  function startSyncing() {
    addSyncs(
      members
        .filter(m => m.checked)
        .map(m => ({ url: m.repoUrl, write: false })),
      store
    );
    navigateTo("/feed");
  }

  return (
    <Grid style={{ margin: "auto" }}>
      <GridCell>
        <List twoLine>
          {members.map(user => (
            <ListItem>
              <ListItemGraphic
                icon={user.profilePic}
                style={{
                  backgroundSize: "cover",
                  padding: "0.3em",
                  borderRadius: "100%"
                }}
              />
              <ListItemText>
                <ListItemPrimaryText>{user.name}</ListItemPrimaryText>
                <ListItemSecondaryText>{user.status}</ListItemSecondaryText>
              </ListItemText>
              <ListItemMeta>
                <Checkbox
                  checked={user.checked}
                  onClick={toggleSelection(user)}
                />
              </ListItemMeta>
            </ListItem>
          ))}
        </List>
      </GridCell>
      <GridCell style={{ textAlign: "center" }}>
        <Button onClick={startSyncing} raised label="Start Syncing" />
      </GridCell>
    </Grid>
  );
}
