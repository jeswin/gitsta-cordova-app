import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

function startApp() {
  ReactDOM.render(<App />, document.getElementById("root"));
}
if ((window as any).cordova) {
  document.addEventListener("deviceready", startApp, false);
} else {
  startApp();
}
