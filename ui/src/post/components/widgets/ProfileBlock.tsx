import * as React from "react";
import { WidgetProps } from "../Post";
import { ProfileCell } from "../../../types";
import { Typography } from "@rmwc/typography";
import { Theme } from "@rmwc/theme";

export default function ProfileBlock(props: WidgetProps<ProfileCell>) {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "row" as "row",
      padding: "1em 0 0 1em"
    },
    image: {
      background: `url(${props.cell.value.src})`,
      backgroundSize: "cover",
      width: "48px",
      height: "48px",
      borderRadius: "100%"
    },
    text: {
      marginLeft: "12px",
      marginTop: props.cell.value.text ? "0px" : "8px"
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.image}></div>
      <div style={styles.text}>
        <Typography use="body1">{props.cell.value.title}</Typography>
        {props.cell.value.text ? (
          <>
            <br />
            <Theme use={"textSecondaryOnBackground"}>
              <Typography use="subtitle2">{props.cell.value.text}</Typography>
            </Theme>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
