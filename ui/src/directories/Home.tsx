import * as React from "react";
import { useEffect, useReducer } from "react";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarTitle,
  TopAppBarFixedAdjust
} from "@rmwc/top-app-bar";
import Directories from "./components/Directories";
import NoDirectories from "./components/NoDirectories";
import { Context, initialState, IState } from "./store";
import reducer from "./store/reducer";
import { goBack } from "../lib/routing";
import { loadDirectories } from "./actions";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState as IState);

  useEffect(() => {
    loadDirectories({ state, dispatch });
  }, []);

  return (
    <>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <TopAppBarNavigationIcon
              icon="arrow_back_ios"
              style={{ marginLeft: "0.5em" }}
              onClick={() => goBack()}
            />
            <TopAppBarTitle>Directories</TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
      {state.directories && state.directories.length ? (
        <Directories directories={state.directories} />
      ) : (
        <NoDirectories />
      )}
    </>
  );
}
