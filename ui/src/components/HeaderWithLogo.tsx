import * as React from "react";
import { ReactNode } from "react";

export type HeaderWithLogoProps = {
  children?: ReactNode;
};

export default function HeaderWithLogo(props: HeaderWithLogoProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "1em 0em 2em 2em"
      }}
    >
      <img
        style={{ width: "5em", marginRight: "1em" }}
        src="/img/logo.png"
        alt="logo"
      />
      {props.children}
    </div>
  );
}
