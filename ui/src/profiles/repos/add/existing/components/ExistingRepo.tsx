import * as React from "react";
import { useContext, useState, KeyboardEvent } from "react";
import { Button } from "@rmwc/button";
import { TextField } from "@rmwc/textfield";
import { Grid, GridCell } from "@rmwc/grid";
import { Context as MainContext } from "../../../../../store";
import { Context } from "../store";
import { debounce } from "../../../../../lib/debounce";
import { Typography } from "@rmwc/typography";
import { addRepoAction } from "../actions";

export default function ExistingRepo() {
  const store = useContext(Context);
  const mainStore = useContext(MainContext);

  const [repoUrl, setRepoUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onAddRepo() {
    addRepoAction(repoUrl, username, password, store, mainStore);
  }

  return (
    <Grid style={{ margin: "auto" }}>
      <GridCell>
        <p
          style={{ background: "#eeeeee", padding: "1em", borderRadius: "4px" }}
        >
          You need to have already created an empty repo at this URL, to which
          you should have write access.
        </p>
      </GridCell>
      <GridCell style={{ textAlign: "center" }}>
        <TextField
          outlined
          required
          onKeyUp={e => setRepoUrl((e.target as any).value)}
          name="repoUrl"
          label="Git Repo Url"
          size={32}
        />
        <br />
        <span style={{ fontSize: "0.8em", color: "gray" }}>
          eg: https://github.com/jeswin/mydata
        </span>
      </GridCell>
      <GridCell style={{ textAlign: "center" }}>
        <TextField
          outlined
          required
          onKeyUp={e => setUsername((e.target as any).value)}
          name="username"
          label="Username"
          size={32}
        />
      </GridCell>
      <GridCell style={{ textAlign: "center" }}>
        <TextField
          outlined
          required
          onKeyUp={e => setPassword((e.target as any).value)}
          label="Access Token or Password"
          size={32}
        />
      </GridCell>

      <GridCell style={{ textAlign: "center" }}>
        <Button raised onClick={onAddRepo} label="Add Repository" />
      </GridCell>
    </Grid>
  );
}
