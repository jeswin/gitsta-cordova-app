import * as React from "react";
import { useContext } from "react";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarTitle,
  TopAppBarFixedAdjust
} from "@rmwc/top-app-bar";
import { Context } from "./store";
import { goBack } from "../lib/routing";
import DirectoryComponent from "./components/Directory";

export default function Directory() {
  const store = useContext(Context);

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
            <TopAppBarTitle>Select people</TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
      <DirectoryComponent members={store.state.members || []} />
    </>
  );
}
