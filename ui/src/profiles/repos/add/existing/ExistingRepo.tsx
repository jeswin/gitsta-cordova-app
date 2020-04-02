import * as React from "react";
import ExistingRepoComponent from "./components/ExistingRepo";
import HeaderWithLogo from "../../../../components/HeaderWithLogo";
import { Typography } from "@rmwc/typography";
import { useReducer } from "react";
import reducer from "./store/reducer";
import { initialState, Context } from "./store";

export default function AddGenericRepo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <HeaderWithLogo>
        <Typography use="headline4">
          Add
          <br />a Git Repo
        </Typography>
      </HeaderWithLogo>
      <ExistingRepoComponent />
    </Context.Provider>
  );
}

