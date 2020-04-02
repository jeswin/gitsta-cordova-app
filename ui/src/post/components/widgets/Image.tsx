import * as React from "react";
import { WidgetProps } from "../Post";
import { UICell, ProfileCell, ImageCell } from "../../../types";

export default function Image(props: WidgetProps<ImageCell>) {
  const styles = {
    container: {},
    image: {
      background: `url(${props.cell.value.src})`,
      backgroundSize: "cover",
      width: "100%",
      height: "300px"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.image}></div>
    </div>
  );
}
