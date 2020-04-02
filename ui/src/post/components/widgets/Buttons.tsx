import * as React from "react";
import { GridCell } from "@rmwc/grid";
import { WidgetProps } from "../Post";
import { TextCell, ButtonsCell } from "../../../types";
import { Theme } from "@rmwc/theme";

export default function Buttons(props: WidgetProps<ButtonsCell>) {
  const styles = {
    container: {
      margin: "0 16px 0 16px",
      textAlign: props.cell.value.align || "left"
    },
    a: {
      textDecoration: "none"
    }
  };

  return (
    <div style={styles.container}>
      <Theme use={"secondary"}>
        {props.cell.value.items.map(x => (
          <span style={styles.a}>
            {x.name}
          </span>
        ))}
      </Theme>
    </div>
  );
}
