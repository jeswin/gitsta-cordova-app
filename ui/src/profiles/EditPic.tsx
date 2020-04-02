import * as React from "react";
import EditPicComponent from "./components/EditPic";
import HeaderWithLogo from "../components/HeaderWithLogo";
import { Typography } from "@rmwc/typography";

export default function EditPic() {
  return (
    <>
      <HeaderWithLogo>
        <Typography use="headline4">
          Upload
          <br />
          your face
        </Typography>
      </HeaderWithLogo>
      <EditPicComponent />
    </>
  );
}
