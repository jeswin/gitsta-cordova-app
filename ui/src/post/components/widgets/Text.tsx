import * as React from "react";
import { GridCell } from "@rmwc/grid";
import { WidgetProps } from "../Post";
import { TextCell } from "../../../types";

export default function Text(props: WidgetProps<TextCell>) {
  const styles = {
    container: {
      margin: "0 16px 0 16px"
    }
  };

  return (
    <div style={styles.container}>
      <p>{props.cell.value}</p>
    </div>
  );
}
