import * as React from "react";

const style = {
  padding: "0.2em 0.8em",
  background: "red",
  borderRadius: "0.4em"
};

const Warn: React.FC = (props: any) => {
  return <div style={style}>{props.children}</div>;
};

export default Warn;
