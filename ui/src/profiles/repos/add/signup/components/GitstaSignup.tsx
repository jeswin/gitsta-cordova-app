import * as React from "react";
import { useContext, useState, KeyboardEvent } from "react";
import { Button } from "@rmwc/button";
import { TextField } from "@rmwc/textfield";
import { Grid, GridCell } from "@rmwc/grid";
import { Context as MainContext } from "../../../../../store";
import { Context } from "../store";
import { debounce } from "../../../../../lib/debounce";
import {
  getGitstaUsernameAvailability,
  beginCreateAccount,
  createAccount
} from "../actions";

export default function GitstaSignup() {
  const store = useContext(Context);
  const mainStore = useContext(MainContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkUsernameAvailability = debounce(function(username: string) {
    getGitstaUsernameAvailability(username, store);
  }, 100);

  function onUsernameEdit(e: KeyboardEvent<any>) {
    const latestVal: string = (e.target as any).value;
    setUsername(latestVal);
    checkUsernameAvailability(latestVal);
  }

  function onCreateAccount() {
    beginCreateAccount(store);
    createAccount(name, email, username, password, store, mainStore);
  }

  return (
    <Grid style={{ margin: "auto" }}>
      <GridCell style={{ textAlign: "center" }}>
        <TextField
          outlined
          required
          onKeyUp={e => setName((e.target as any).value)}
          name="name"
          label="Your name..."
        />
      </GridCell>
      <GridCell style={{ textAlign: "center" }}>
        <TextField
          outlined
          required
          onKeyUp={e => setEmail((e.target as any).value)}
          type="email"
          name="email"
          label="Email address..."
        />
      </GridCell>
      <GridCell style={{ textAlign: "center" }}>
        <TextField
          outlined
          required
          onKeyUp={onUsernameEdit}
          label="Choose a username..."
        />
        {username !== "" ? (
          store.state.gitsta.usernameIsAvailable ? (
            <>
              <br />
              <span style={{ fontSize: "0.8em", color: "green" }}>
                {username} is available.
              </span>
            </>
          ) : (
            <>
              <br />
              <span style={{ fontSize: "0.7em", color: "red" }}>
                {username} is unavailable.
              </span>
            </>
          )
        ) : (
          <></>
        )}
      </GridCell>
      <GridCell style={{ textAlign: "center" }}>
        <TextField
          outlined
          required
          onKeyUp={e => setPassword((e.target as any).value)}
          type="password"
          label="Password..."
        />
      </GridCell>
      <GridCell style={{ textAlign: "center" }}>
        <Button raised onClick={onCreateAccount} label="Create Account" />
      </GridCell>
    </Grid>
  );
}
