import * as React from "react";
import { WidgetProps } from "../Post";
import { IconsCell } from "../../../types";
import { Icon } from "@rmwc/icon";

export default function Icons(props: WidgetProps<IconsCell>) {
  const styles = {
    container: {
      //marginLeft: "16px"
    },
    icon: {
      padding: "0 16px 0 16px"
    }
  };

  return (
    <div style={styles.container}>
      {props.cell.value.items.map(i => (
        <Icon style={styles.icon} icon={i.name} />
      ))}
    </div>
  );
}
