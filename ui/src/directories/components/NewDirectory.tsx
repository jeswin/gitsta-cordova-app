import * as React from "react";
import { useState } from "react";

import { Grid, GridCell } from "@rmwc/grid";
import { Button } from "@rmwc/button";
import { TextField } from "@rmwc/textfield";

export default function NewDirectory() {
  function addDirectoryClick() {}

  const [url, setUrl] = useState("");

  return (
    <Grid style={{ margin: "auto" }}>
      <GridCell style={{ textAlign: "center" }}>
        <p>
          Every directory will advertise a url.
          <br /> Find it and paste it in the text box below.
        </p>
      </GridCell>
      <GridCell style={{ textAlign: "center" }}>
        <TextField
          outlined
          required
          onKeyUp={e => setUrl((e.target as any).value)}
          name="Directory Url"
          label="Url..."
        />
      </GridCell>
      <GridCell style={{ textAlign: "center" }}>
        <Button raised onClick={addDirectoryClick} label="Add Directory" />
      </GridCell>
    </Grid>
  );
}
