import * as React from "react";
import { useState } from "react";

import { Button } from "@rmwc/button";
import { Grid, GridCell } from "@rmwc/grid";
import { Link } from "../../lib/routing";

export default function EditPic() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSavePicture() {}

  return (
    <Grid style={{ margin: "auto" }}>
      <GridCell style={{ textAlign: "center" }}>
        <img src="/img/profile.jpg" height="200" width="200" alt="Profile" />
      </GridCell>
      <GridCell style={{ textAlign: "center" }}>
        <p>
          This is the default picture.
          <br />
          You might want to change it.
        </p>
      </GridCell>
      <GridCell style={{ textAlign: "center" }}>
        <Button raised onClick={onSavePicture} label="Select Picture" />
      </GridCell>
      <GridCell style={{ textAlign: "center" }}>
        Or <Link href="/feed">skip this step</Link>.
      </GridCell>
    </Grid>
  );
}
