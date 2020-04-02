import * as React from "react";
import { Grid, GridCell } from "@rmwc/grid";
import { Button } from "@rmwc/button";
import { navigateTo } from "../lib/routing";

export default function NoRepos() {
  function findPeopleClick() {
    navigateTo("/directories");
  }

  return (
    <Grid style={{ margin: "auto" }}>
      <GridCell style={{ textAlign: "center" }}>
        <img
          src="/img/undraw_shared_workspace_hwky.png"
          style={{ width: "100%" }}
          alt="Find People"
        />
      </GridCell>
      <GridCell style={{ textAlign: "center" }}>
        There's nothing here because you haven't synced with anyone.
      </GridCell>
      <GridCell style={{ textAlign: "center" }}>
        <Button raised onClick={findPeopleClick} label="Find People" />
      </GridCell>
    </Grid>
  );
}
