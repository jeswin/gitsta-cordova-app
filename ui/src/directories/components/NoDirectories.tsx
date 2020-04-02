import * as React from "react";
import { Grid, GridCell } from "@rmwc/grid";
import { Button } from "@rmwc/button";
import { navigateTo } from "../../lib/routing";

export default function NoDirectories() {
  function addDirectoriesClick() {
    navigateTo("/directories/new");
  }

  return (
    <Grid style={{ margin: "auto" }}>
      <GridCell style={{ textAlign: "center" }}>
        <img
          src="/img/undraw_online_friends_x73e.png"
          alt="No directories"
          style={{ width: "100%" }}
        />
      </GridCell>
      <GridCell style={{ textAlign: "center" }}>
        You have not added any directories.
      </GridCell>
      <GridCell style={{ textAlign: "center" }}>
        <Button raised onClick={addDirectoriesClick} label="Add Directories" />
      </GridCell>
    </Grid>
  );
}
